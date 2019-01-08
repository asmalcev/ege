let words = ['кровоточИла','двИжимый','равнЫ','алкогОль','инженЕров','арбУз','вОвремя','давнИшний',
'докраснА','зАнятый','зимОвщик','импЕрский','исключИт','начАв','убрАть','обострИть','опОшлят','процЕнт',
'срЕдствами','щАвель','баловАть','вЕрба','включЕн','включИм','влилАсь','балОванный',' балОванный',' балУясь',
' включЕн',' включЕнный',' включЕнный',' довезЕнный',' зАгнутый',' зАнятый',' зАпертый',' зАтемно',' закУпорив',
' занятА',' запертА',' заселЕнный',' заселенА',' защемИт',' избалОванный',' кормЯщий',' красИвее',' кровоточАщий',
' молЯщий',' нАжитый',' нАчатый',' навЕрх',' надОлго',' нажИвший',' нажитА',' налИвший',' налитА',' нанЯвшийся',
' начАв',' начАвший',' начАвшись',' начатА',' ненадОлго',' низведЕн',' низведЕнный',' низведЕнный',' ободрЕн',
' ободрЕнный',' ободренА',' обострЕнный',' определЕн',' определЕнный',' отдАв',' отключЕнный',' повторЕнный',
' поделЕнный',' поднЯв',' понЯв',' понЯвший',' понялА',' послАла',' послАть',' прИбыл',' прИбыло',' прИнял',
' прИняли',' прИнятый',' прибЫв',' прибЫть',' прибылА',' принялА',' приручЕнный',' прожИвший',' рвалА',' рвАть',
' сОгнутый',' сверлИт',' сверлИть',' сверлИшь',' снЯтый',' снЯть',' снялА',' снятА',' создАть',' создалА',
' сорИт',' сорИть',' сорвАть',' сорвалА',' убрАть',' убралА',' убыстрИть',' углубИть',' укрепИт',' укрепИть',
' чЕрпать',' щЕлкать',' щемИт',' щемИть','Иксы','Отзыв(на публикацию)','Отрочество','алфавИт','аэропОрты',
'бАнты','бОроду','болтлИва','брАться','бралА','бралАсь','бухгАлтеров','вернА','вероисповЕдание','взЯться',
'взялА','взялАсь','влИться','влилАсь','водопровОд','ворвАться','ворвалАсь','воспринЯть','воспринялА',
'воссоздалА','вручИт','вручИть','газопровОд','гнАться','гналА','гналАсь','граждАнство','дОверху','дОнизу',
'дОсуха','дефИс','децимЕтр','дешевИзна','диалОг','диспансЕр','доЯр','добелА','добрАть','добрАться','добралА',
'добралАсь','договорЕнность','дождАться','дождалАсь','дозИровать','дозвонИтся','дозвонИться','дозвонЯтся',
'докумЕнт','донЕльзя','досУг','еретИк','жИться','жалюзИ','ждалА','жилОсь','зАгодя','зАнял','зАняли','зАняло',
'зАсветло','завИдно','закУпорить','занЯть','занялА','заперЕть','заперЕться','заперлА','заперлАсь','звалА','звонИм',
'звонИт','звонИть','звонИшь','знАчимость','знАчимый','исповЕдать','исчЕрпать','кОнусов','кОнусы','кУхонный',
'каталОг','квартАл','киломЕтр','киоскЕр','клАла','клАсть','клЕить','контролЕр','корЫсть','крАлась','крАны',
'крАсться','красИвее','красИвейший','кремЕнь','кремнЯ','лЕкторов','лЕкторы','лИться','лгалА','лилА','лилАсь',
'ловкА','лыжнЯ','мЕстностей','малЯр','миллимЕтр','мозаИчный','монолОг','мусоропровОд','нАчал','нАчали',
'нЕдруг','нЕнависть','нОвости','нОготь','нОгтя','наврАть','навралА','наделИт','наделИть','надорвАться',
'надорвалАсь','назвАться','назвалАсь','накренИтся','накренИться','налИть','налилА','намЕрение','нарОст',
'нарвАть','нарвалА','насорИт','насорИть','начАть','началА','недУг','некролОг','нефтепровОд','новостЕй',
'нормировАть','обзвонИт','обзвонИть','облИться','облегчИт','облегчИть','облилАсь','обнЯться','обнялАсь',
'обогнАть','обогналА','ободрАть','ободрИть','ободрИться','ободрИшься','ободралА','обострИть','огОнь',
'одолжИт','одолжИть','озлОбить','оклЕить','окружИт','окружИть','опОшлить','опломбировАть','оптОвый',
'освЕдомиться','освЕдомишься','отбЫть','отбылА','отдАть','отдалА','отзЫв(посла)','откУпорил','откУпорить',
'отозвАть','отозвАться','отозвалА','отозвалАсь','пОручни','пОчестей','партЕр','перезвонИт','перезвонИть',
'перелИть','перелилА','плодоносИть','повторИт','повторИть','позЫв','позвАть','позвалА','позвонИт','позвонИть',
'позвонИшь','полИть','полилА','положИл','положИть','понЯть','портфЕль','премировАть','придАное','призЫв',
'принУдить','принЯть','прожОрлива','прозорлИва','сантимЕтр','свЕкла','сирОты','слИва','слИвовый','смазлИва',
'созЫв','создАв','сортировАть','срЕдства','стАтуя','столЯр','суетлИва','тОртов','тОрты','тамОжня','формировАть',
'цЕнтнер','цемЕнт','цепОчка','чЕлюстей','шАрфы','школЯр','шофЕр','экспЕрт']

let j = 1
let t = document.querySelector('.true')
let m = document.querySelector('.msg')
let q = document.querySelector('.quest')
let a = document.querySelector('.answer-block')
let md = document.querySelector('.modal-dict')
let sr = document.querySelector('.search-results')
let modalBlocks = document.querySelectorAll('.modal')
let number

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
function generate(i = Math.floor(Math.random() * words.length)) {

	while (i == j)
		i = Math.floor(Math.random() * words.length)

	q.innerHTML = convert(words[i])
	t.innerHTML = words[i]
	a.style['display'] = 'none'
	q.style['display'] = 'block'
	j = i

	return words[i]

}
function convert(s) {

	let smallVowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'ё']
	let bigVowels = ['У', 'Е', 'Ы', 'А', 'О', 'Э', 'Я', 'И', 'Ю', 'Ё']
	let st = ''

	for (let i = 0; i < s.length; i++) {

		if (smallVowels.indexOf(s[i]) != -1)
			st +=`<span class="vowel" onclick="check()">${s[i]}</span>`
		else if (bigVowels.indexOf(s[i]) != -1)
			st += `<span class="vowel" onclick="check(true)">${s[i].toLowerCase()}</span>`
		else if (s[i] == '('){
			st += s.slice(i, s.length)
			break
		} else st += s[i]

	}

	return st

}

function openM() {
	document.querySelector('.modal-menu').style['transform'] = 'translateY(0)'
}

function closeM() {
	document.querySelector('.modal-menu').style['transform'] = 'translateY(100%)'
}

function checkDictionaryLength() {


	document.querySelector('.length-block').innerHTML = 'Слов в словаре: ' + words.length

	for (number = 1072; number < 1104; number++) {
		if (words.some(checkword))
			md.innerHTML += `<p class="big-letter">${String.fromCharCode(number).toUpperCase()}${String.fromCharCode(number)}</p>`
		for (let j = 0; j < words.length; j++) {
			let g = words[j].toLowerCase()
			if (g.charCodeAt(0) == number)
				md.innerHTML += `<p class="words">${words[j]}</p>`
		}
	}

}

function checkword(word) {
	return word.toLowerCase()[0] == String.fromCharCode(number)
}

function openD(p) {

	switch(p) {
		case 'theory':
			modalBlocks.forEach( modal => {
				modal.style['display'] = 'none'
			})
			modalBlocks[1].style['display'] = 'block'
			break;
		case 'search':
			modalBlocks.forEach( modal => {
				modal.style['display'] = 'none'
			})
			modalBlocks[2].style['display'] = 'block'
			break;
		case 'author':
			modalBlocks.forEach( modal => {
				modal.style['display'] = 'none'
			})
			modalBlocks[3].style['display'] = 'block'
			break;
		default :
			modalBlocks.forEach( modal => {
				modal.style['display'] = 'none'
			})
			modalBlocks[0].style['display'] = 'block'
			break;
	}

}

generate()
openD()
checkDictionaryLength()

function showResults(str) {

	if (str == '')
		sr.innerHTML = 'Совпадений не найдено...'
	else {
		let log = true
		str = str.toLowerCase()
		sr.innerHTML = ''
		let regexp = new RegExp(str)
		words.forEach(w=>{
			s = w.toLowerCase()
			if (s.search(regexp) != -1) {
				sr.innerHTML += `<p>${w}</p>`
				log = false
			}
		})
		if (log)
			sr.innerHTML = 'Совпадений не найдено...'
	}

}

if (navigator.serviceWorker.controller)
  console.log('[PWA Builder] active service worker found, no need to register')
else
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:' + reg.scope)
  })
