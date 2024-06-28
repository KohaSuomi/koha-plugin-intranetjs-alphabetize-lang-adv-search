/// ALKU ///
//Kielten aakkostaminen ja priorisointi tarkassa haussa
function sortSelect(select, startAt) {
    if(typeof startAt === 'undefined') {
        startAt = 0;
    }
    var texts = [];
    for(var i = startAt; i < select.length; i++) {
        texts[i] = [
            select.options[i].text.toUpperCase(),
            select.options[i].text,
            select.options[i].value
        ].join('|');
    }
    texts.sort();
    texts.forEach(function(text, index) {
        var parts = text.split('|');
        select.options[startAt + index].text = parts[1];
        select.options[startAt + index].value = parts[2];
    });
}

$(document).ready(function () {
  if ((window.location.pathname == ("/cgi-bin/koha/catalogue/search.pl") && !window.location.search) || (window.location.href.indexOf("/catalogue/search.pl?advsearch=1&edit_search") > -1) || (window.location.href.indexOf("/catalogue/search.pl?do=Clear") > -1))  {
    var selected_lang_limit = $( "#language-limit option:selected" ).val();
    var selected_orig_lang_limit = $( "#language-original-limit option:selected" ).val();
    
    if  (REPLACE_BY_CONFIG_PARAM_A <= 0) {
        
        sortSelect(document.getElementById('language-limit'), 1);
        $('#language-limit').find('option[value="ln,rtrn:eng"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:swe"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:fin"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $("#language-limit").val(selected_lang_limit);
        
        sortSelect(document.getElementById('language-original-limit'), 1);
        $('#language-original-limit').find('option[value="language-original,rtrn:eng"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:swe"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:fin"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').val(selected_orig_lang_limit);
    }
    
    else {   
        sortSelect(document.getElementById('language-limit'), 1);
        $('#language-limit').find('option[value="ln,rtrn:sms"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:sme"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:smn"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:eng"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:swe"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $('#language-limit').find('option[value="ln,rtrn:fin"]')
             .insertBefore($('#language-limit').find('option:eq(1)'));
        $("#language-limit").val(selected_lang_limit);
        
        sortSelect(document.getElementById('language-original-limit'), 1);
        $('#language-original-limit').find('option[value="language-original,rtrn:sms"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:sme"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:smn"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:eng"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:swe"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').find('option[value="language-original,rtrn:fin"]')
             .insertBefore($('#language-original-limit').find('option:eq(1)'));
        $('#language-original-limit').val(selected_orig_lang_limit);
    }
  }
});
/// LOPPU ///