// Feature:
// Control flow with <% %>
// Escaped output with <%= %> (escape function configurable)
// Unescaped raw output with <%- %>
// Newline-trim mode ('newline slurping') with -%> ending tag
// Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>
// Custom delimiters (e.g., use <? ?> instead of <% %>)
// Includes
// Client-side support
// Static caching of intermediate JavaScript
// Static caching of templates
// Complies with the Express view system

// example
// <% if (user) {%>
//   <h2><%= user.name %></h2>
// <% } %>

// usage
// var template = ejs.compile(str, options);
// template(data);
// // => Rendered HTML string

// ejs.render(str, data, options);
// // => Rendered HTML string

// ejs.renderFile(filename, data, options, function(err, str){
//     // str => Rendered HTML string
// });

// tags
// <% 'Scriptlet' tag, for control-flow, no output
// <%_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
// <%= Outputs the value into the template (escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %%> Outputs a literal '%>'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> 'Whitespace Slurping' ending tag, removes all whitespace after it

// custom delimiter
// var ejs = require('ejs'),
//     users = ['geddy', 'neil', 'alex'];

// // Just one template
// ejs.render('<?= users.join(" | "); ?>', {users: users}, {delimiter: '?'});
// // => 'geddy | neil | alex'

// // Or globally
// ejs.delimiter = '$';
// ejs.render('<$= users.join(" | "); $>', {users: users});
// // => 'geddy | neil | alex'

// layouts
// <%- include('header') -%>
// <h1>
//   Title
// </h1>
// <p>
//   My page
// </p>
// <%- include('footer') -%>

// loop
// <ul>
//  <% users.forEach(function(user){ %>
//    <h2> <%= user.name %> </h2>
//  <% }); %>
// </ul>
