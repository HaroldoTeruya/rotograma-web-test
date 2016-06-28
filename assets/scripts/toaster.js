var codetmpl = "<code>%codeobj%</code><br><code>%codestr%</code>";

$(document).ready(function ()
{
  $( "#search_all" ).click(function()
  {
    var options =
    {
      priority : "warning",
      title    : "Sem sucesso!",
      message  : "Não houve resultado encontrado!"
    };

    maketoast(options);
  });
});
function maketoast (options)
{
  // evt.preventDefault();



  if (options.priority === '<use default>')
  {
    options.priority = null;
  }

  var codeobj = [];
  var codestr = [];

  var labels = ['message', 'title', 'priority'];
  for (var i = 0, l = labels.length; i < l; i += 1)
  {
    if (options[labels[i]] !== null)
    {
      codeobj.push([labels[i], "'" + options[labels[i]] + "'"].join(' : '));
    }

    codestr.push((options[labels[i]] !== null) ? "'" + options[labels[i]] + "'" : 'null');
  }

  if (codestr[2] === 'null')
  {
    codestr.pop();
    if (codestr[1] === 'null')
    {
      codestr.pop();
    }
  }

  codeobj = "$.toaster({ " + codeobj.join(", ") + " });"
  codestr = "$.toaster(" + codestr.join(", ") + ");"

  $('#toastCode').html(codetmpl.replace('%codeobj%', codeobj).replace('%codestr%', codestr));
  $.toaster(options);
};
