const appHistory = ReactRouter.useRouterHistory(History.createHashHistory)({queryKey: false})

var TerminalHandler = function() {
  var self = this;

  self.help = function() {
    var message = `
Commands:
  ${format_text('help', 'b')}:      list these commands
  ${format_text('about', 'b')}:     about
  ${format_text('work', 'b')}:      not a NEET
  ${format_text('projects', 'b')}:  stuff i did for funsies

    `;
    this.echo(message);
  }

  function execute(cmd) {
    return function() {
      appHistory.push(cmd);
    };
  }

  var commands = ['about', 'work', 'projects'];
  for (var i in commands) {
    self[commands[i]] = execute(commands[i]);
  }
};

function intro(term) {

  function press_enter() {
    var e = $.Event('keydown');
    e.which = 13;
    e.keyCode = 13;
    $(term).trigger(e);
  }

  function typed(message, delay) {
    var prompt = term.get_prompt();
    var c = 0;
    if (message.length > 0) {
      var interval = setInterval(function() {
        term.insert(message[c++]);
        if (c == message.length) {
          clearInterval(interval);
          // execute in next interval
          setTimeout(function() {
            // swap command with prompt
            term.set_command(message);
            press_enter();
          }, delay);
        }
      }, delay);
    }
  }

  typed('help', 100);
}

function format_text(text, options, color) {
  return `[[${options};${color};]${text}]`;
}

var handler = new TerminalHandler();
$(function($) {
  options = {
    height: '500px',
    prompt: function(cb) {
      var options = 'b';
      var color = '#ff00ff';
      var prompt_str = format_text('~/', options, color) + '$ ';
      cb(prompt_str);
    },
    greetings: false,
    onInit: intro,
  };

  $('#terminal').terminal(handler, options);
});
