/* Templates for HTML blocks
 *
 * format is variant of Mustache
 * using ~{ }~ instead of {{ }}
 * (to avoid clashes in SPARQL)
 *
 * templating engine is Hogan
 * http://twitter.github.io/hogan.js/
 */

var entryTableTemplate = " \n\
        <table id='pagesTable'> \n\
            <tr> \n\
                <th colspan='3'><a href='index.html'>FuWiki</a> Pages</th> \n\
            </tr> \n\
            <tr> \n\
                <th class='center'>Page</th> \n\
                <th class='center'>Date</th> \n\
                <th class='center'>Creator</th> \n\
            </tr> \n\
            <tr id='entries'></tr> \n\
        </table> \n\
            ";

var resultTemplate = "<li><a href='~{uri}~'>~{title}~</a></li>";


var linkTemplate = "<a href='~{uri}~'>~{title}~</a>";

var rowTemplate = " <tr> \
           <td>" + linkTemplate + "</td> \
           <td class='center'>~{modified}~</td> \
            <td class='center'>~{nick}~</td> \
            </tr>";

/* rows='20' */
var editEntryTemplate = "<div class='entry'> \
            <h1 class='center'><a href=\"~{uri}~\">~{title}~</a></h1> \
            <form> \
  <fieldset> \
        <legend>Edit Post</legend>\
            <label for='title'>Title</label> \
            <input id='title' type='text' value='~{title}~'></input> \
            <label for='content'>Content</label> \
            <textarea class='content' id='content' placeholder='Enter content here...'>~{content}~</textarea> \
            <label for='maintagscontainer'>Tags</label> \
            <ul id='maintagscontainer'  id='allowSpacesTags'> \
            </ul> \
            <label for='nick'>Nick</label> \
            <input id='nick' type='text' value='~{nick}~'></input> \
    <div id='created'>Created : ~{created}~</div> \
            <label for='format'>Format</label><!-- is Media Type URI --> \
            <select id='format'> \
               <option value='http://purl.org/NET/mediatypes/text/markdown'>Markdown</option> \
               <option value='http://purl.org/NET/mediatypes/application/javascript'>Javascript</option> \
            </select> \
 </fieldset> \
            </form> \
            </div>";

//    <label for='maintagscontainer'>Tags</label> \

var pageEntryTemplate = "<div class='entry'> \
            <h1 class='center' id='pagetitle'><a href=~{uri}~>~{title}~</a></h1> \
            <div class='content'>~{content}~</div> \
            <ul id='maintagscontainer'> \
            </ul> \
            <div class='byline center'>latest edit by ~{nick}~ on ~{modified}~</div> \
            </div>";

//?same as above?
var entryTemplate = "<div class='entry'> \
            <h1 class='center'><a href=~{uri}~>~{title}~</a></h1> \
            <div class='content'>~{content}~</div> \
            <div class='byline center'>latest edit by ~{nick}~ on ~{modified}~</div> \
            </div>";