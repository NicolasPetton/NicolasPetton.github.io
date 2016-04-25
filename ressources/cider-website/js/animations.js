function animateRepl() {
	var content = $('.repl .animate .content');
	var result = $('.repl .result');
	setTimeout(function() {
		insertContent(content, function() {
			insertResult(result, restartAnimation);
		});
	}, 8000);
}

function insertContent(span, callback) {
	var text = '(println "Cider rocks!")'.split('').reverse();
	insertTextContent(text, span, callback);
}

function insertTextContent(text, span, callback, inString) {
	if (text.length) {
		var nextChar = text.pop();
		setTimeout(function() {
			if(nextChar === ' ') {
				nextChar = '&nbsp;';
			} else if(nextChar === '(' || nextChar === ')') {
				nextChar = '<span class="paren">' + nextChar + '</span>';
			} else if(nextChar === '"') {
				inString = !inString;
			}
			if (inString || nextChar === '"') {
				nextChar = '<span class="string">' + nextChar + '</span>';
			}
			$('.caret').removeClass('animated');
			span.html(span.html() + nextChar);
			insertTextContent(text, span, callback, inString);
		}, 100);
	} else {
		setTimeout(callback, 160);
	}
}

function insertResult(span, callback) {
	$('.caret').addClass('animated');
	span.text('"Cider rocks!"');
	$('.first .caret').hide();
	$('.second').show();
	// setTimeout(restartAnimation, 2000);
}

function restartAnimation() {
	$('.first .caret').show();
	$('.second').hide();
	$('.repl .animate .content').empty();
	$('.repl .result').empty();
	$('.repl').removeClass('show-result');
	animateRepl();
}

$(animateRepl);
