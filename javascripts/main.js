(function(){var e,t;e="propertychange change click keyup input paste",t="https://en.wikipedia.org/w/api.php",$(function(){var n;return n=$("input#query-text"),n.bind(e,_.debounce(function(){var e,r,o;return r=n.val(),_.isEmpty(r)?void 0:(e=encodeURIComponent(r),o=t+"?format=json&action=query&prop=extracts&exintro=&explaintext=&redirects&exsentences=3&titles="+e,$.ajax(o,{async:!1,dataType:"jsonp",crossDomain:!0}).done(function(e){var t,n;return n=1*_.findKey(e.query.pages),n>0?(t=e.query.pages[n].extract,t=t.replace("best known for","<b>best known for</b>"),$("#result").html(t)):$("#result").html("")}))},250)),$("form").submit(function(){return!1})})}).call(this);