let words = ['аэропОрты','бАнты','бОроду','бухгАлтеров','вероисповЕдание','граждАнство','дефИс','дешевИзна','диспансЕр','договорЁнность','докумЕнт','досУг','еретИк','жалюзИ','знАчимость','Иксы','каталОг','исповЕдать','знАчимый','диалОг',
'монолОг','некролОг','квартАл','киломЕтр','сантимЕтр','децимЕтр','миллимЕтр','кОнусы','кОнусов','корЫсть','крАны','кремЕнь','кремнЯ','огОнь','лЕкторы','лЕкторов','лыжнЯ','мЕстностей','пОчестей','чЕлюстей','новостЕй',
'мусоропровОд','газопровОд','нефтепровОд','водопровОд','намЕрение','нарОст','нЕдруг','недУг','некролОг','каталОг','нЕнависть','нОвости','новостЕй','мЕстностей','нОготь','нОгтя','Отрочество','партЕр','портфЕль','пОручни','придАное',
'призЫв','позЫв','отзЫв(посла)','созЫв','Отзыв(на публикацию)','свЁкла','сирОты','срЕдства','созЫв','призЫв','стАтуя','столЯр','малЯр','доЯр','школЯр','тамОжня','тОрты','тОртов','цемЕнт','цЕнтнер','цепОчка','шАрфы','бАнты','шофЁр','киоскЁр','контролЁр','экспЕрт']
let j = 1
let t = document.querySelector('.true')
let m = document.querySelector('.msg')
let q = document.querySelector('.quest')
let a = document.querySelector('.answer-block')
function check(is = false) {
	a.style['display'] = 'block'
	q.style['display'] = 'none'
	if (is) {
		m.innerHTML = 'Правильно!'
		t.style.color = '#2EE036'
	}
	else {
		m.innerHTML = 'Ошибка!'
		t.style.color = '#D91414'
	}
}
function generate() {
	let i = Math.floor(Math.random() * words.length)
	while (i == j)
		i = Math.floor(Math.random() * words.length)
	q.innerHTML = convert(words[i])
	t.innerHTML = words[i]
	a.style['display'] = 'none'
	q.style['display'] = 'block'
	j = i
}
function convert(s) {
	let smallVowels = ['у','е','ы','а','о','э','я','и','ю','ё']
	let bigVowels = ['У','Е','Ы','А','О','Э','Я','И','Ю','Ё']
	let st = ''
	for (let i=0;i<s.length;i++){
		if (smallVowels.indexOf(s[i])!=-1) st +=`<span class="vowel" onclick="check()">${s[i]}</span>`
		else if (bigVowels.indexOf(s[i])!=-1) st += `<span class="vowel" onclick="check(true)">${s[i].toLowerCase()}</span>`
		else if (s[i] == '(') break
		else st += s[i]
	}
	return st
}
generate()