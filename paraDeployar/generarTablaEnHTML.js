fs = require('fs');
var Sqrl = require("squirrelly")

const template = `
<link rel="stylesheet" href="prism.css"/>
<link rel="stylesheet" href="scriptsTable.css"/>

<script src="prism.js"></script>

<script>

    function chooseLanguage(evt, language) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(language).style.display = "block";
  evt.currentTarget.className += " active";
} 
</script>

<!-- Tab links -->
<div class="tab">
  {{@each(it) => languageWithScript}}
    <button class="tablinks" onclick="chooseLanguage(event, '{{languageWithScript.language}}')">{{languageWithScript.language}}</button>
  {{/each}}
</div>


<!-- Tab content -->
{{@each(it) => languageWithScript}}
    <div id="{{languageWithScript.language}}" class="tabcontent">
    <pre>
        <code class="language-{{languageWithScript.language}}" id="codigo-{{languageWithScript.language}}">{{languageWithScript.script}}</code>
    </pre>
    </div>
{{/each}}
`

const scriptsPath = '../bolaMagica'

const tablePath = '../tabla'

const languagesWithScriptFiles =
    fs.readdirSync(scriptsPath)
        .map(language => {
            const scriptFile = fs.readdirSync(`${scriptsPath}/${language}`)[0]
            const script = fs.readFileSync(`${scriptsPath}/${language}/${scriptFile}`)
            return {language, script}
        })

const tableHtml = Sqrl.render(template, languagesWithScriptFiles)

fs.writeFile(`${tablePath}/scriptsTable.html`, tableHtml, function (err) {
  if (err) return console.log(err);
});