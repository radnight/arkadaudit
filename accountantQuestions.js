// textarea placeholder
document.getElementById('text').textContent = ''

// search bar
const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    if (value == "") {
        for (articleWrapper of articlesWrappers){
            articleWrapper.style.display = "flex"
        }
        return
    } 
    for (articleWrapper of articlesWrappers){
        articleWrapper.style.display = "none"
    }
    console.log(searchFunction(value))
    for (hashcode of searchFunction(value)) {
        const articleElement = document.querySelector(`[hash="${hashcode}"]`) 
        articleElement.style.display = "flex"
    }
})

// search function
function searchFunction(value) {
    let articleInclude = []
    for (content of articlesList) {
        if (content[1].toLowerCase().includes(value)) {
            articleInclude.push(content[0])
        }
        if (content[2].toLowerCase().includes(value)) {
            articleInclude.push(content[0])
        }
    }
    return articleInclude
}

// create articles from list 

//[hash, heading, hashtag {can be whether 0 or str), img, question (can be whether 0 or str),
//[ 
// [text, txt], 
// [photo, img], 
// [text, txt], 
// [text, img], 
// [photo, img],
// etc]]


// !!! create function that makes articlesList from db !!!

let articlesList = [
    [188767231755, "Оценка вклада", "пенсия", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]],
    [1823233387671755, "Цели составного фонда", "НДС", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]],
    [11273331755, "Полная стоимость товаров", "НДС", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]],
    [423671222755, "Последовательность расчета НДС", "НДС", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]],
    [1111271755, "Полная стоимость товаров", "НДС", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]],
    [423674431755, "Последовательность расчета НДС", "НДС", "photos/demo2.png", "Учредитель, резидент РУз уменьшает уставной фонд. в Счет уменьшения УФ учредитель забирает сырье. Вопрос: НДС  на выбывающее сырье включается в стоимость уменьшения или на расходы предприятия?",
        [
[        `1. Последовательность расчета НДС.
Вопрос касается определения налоговой базы при передачи сырья в счет уменьшения доли в уставном фонде Предприятия.
 Рекомендуем, прежде чем задавать вопрос об определении налоговой базы операции, провести тестирование всей операции по элементам налогообложения:

1) Ваше предприятие – налогоплательщик НДС;

2) Передача имущества в счет уменьшения доли в УФ является оборотом по реализации (пп. а п. 3 ч. ст. 239 НК), при условии, что место реализации товаров признается  РУз,  и такая реализация не является льготной (ст. 243 НК); 
3) Налоговая база по такой операции определяется согласно ч.8 ст. 248 НК:
(ч.8) При передаче товаров (оказании услуг) в счет оплаты труда физических лиц или в счет выплаты дивидендов, а также в случаях, установленных пунктом 3 части четвертой статьи 239 настоящего Кодекса, налоговая база определяется с учетом налога исходя из стоимости товаров*.., определяемой в соответствии с частью первой настоящей статьи. 
*Часть первая ст. 248 так определяет стоимость товаров:
«(ч.1) ….исходя из примененной сторонами сделки цены (тарифа), определяемой с учетом требований статьи 176 настоящего Кодекса, с учетом акцизного налога (для подакцизных товаров, услуг)….»
Таким образом, налоговой базой по передачи имущества в счет возврата доли УФ является стоимость такого имущества, установленная в протоколе, с учетом налога. 

2. Оценка вклада.
Важно понимать, что оценка имущества в счет возврата вклада может отличаться от балансовой стоимости такого имущества. При этом, я не встречала (хотя и искала) директивы нашего законодательства, определяющей, что оценка имущества, передаваемого в счет уменьшения доли, должна быть равна рыночной стоимости.
Стандарты бухгалтерского учета (НСБУ 4, IAS 2) требуют, чтобы ТМЗ оценивались по наименьшей из двух стоимостей – первоначальной или чистой стоимости реализации. 
Таким образом, собственник вправе принять оценку имущества, передаваемого в счет возврата доли в УФ, равной балансовой стоимости.

1. Пример отражения такой операции в бухгалтерском и налоговом  учетах.
Учредитель принял решение уменьшить долю в уставном фонде на 100 000 тыс.сум. В счет возврата доли будет передано сырье. Балансовая стоимость сырья 100 000 тыс.сум. Оценка сырья, передаваемого в счет уменьшения доли, равна балансовой стоимости.
 
Проводки.
`, "txt"],
        ["photos/demo3.png", "img"],
        [`Сырье по факту передается  ниже балансовой стоимости (так как мы «выкрутили» НДС), при выбытии возникает расход в сумме 10 714 тыс.сум.
 
Этот расход не может признаваться вычетом при расчете налога на прибыль (п.18 ст.317 НК), а так же эта разница признается доходом в виде материальной выгоды (п. 3 ч.1 ст. 376 НК). Начисленный НДФЛ составит 1 286 тыс.сум.
 `, "txt"]
    ]]
]


const articles = document.getElementById("articles")

window.onload = function () {
    for (article of articlesList) {
        // create elements
        const articlesWrapper = document.createElement("div")
        const articlesHeading = document.createElement("h3")
        const contentWrapper = document.createElement("div")
        const textWrapper = document.createElement("div")
        const articlesText = document.createElement("p")
        const textFooter = document.createElement("div")
        const buttonReadMore = document.createElement("a")
        const articlesHashtag = document.createElement("a")
        const articlesImgWrapper = document.createElement("div")
        const articlesImg = document.createElement("img")


        // add class 
        articlesWrapper.classList.add("articlesWrapper")
        articlesWrapper.setAttribute("isVisible", true)
        articlesWrapper.setAttribute("hash", article[0])
        contentWrapper.classList.add("contentWrapper")
        textWrapper.classList.add("textWrapper")
        textFooter.classList.add("textFooter")
        articlesImgWrapper.classList.add("imgWrapper")
        articlesHashtag.classList.add("articlesHashtag")
        buttonReadMore.classList.add("buttonBlueReg")
        buttonReadMore.classList.add("buttonReadMore")


        // add unique id
        buttonReadMore.id = `articlesButton${article[0]}`


        // add content
        articlesHeading.innerText = article[1]
        articlesText.innerText = article[5][0][0].slice(0, 280) + "..."
        buttonReadMore.innerText = "Читать далее"
        articlesHashtag.innerText = article[2]
        articlesImg.src = article[3]


        // append to the document
        articles.appendChild(articlesWrapper)
        articlesWrapper.appendChild(articlesHeading)
        articlesWrapper.appendChild(contentWrapper)
        contentWrapper.appendChild(textWrapper)
        contentWrapper.appendChild(articlesImgWrapper)
        textWrapper.appendChild(articlesText)
        textWrapper.appendChild(textFooter)
        textFooter.appendChild(buttonReadMore)
        textFooter.appendChild(articlesHashtag)
        
        articlesImgWrapper.appendChild(articlesImg)
    }

    // show article function

    const buttonsReadMore = document.getElementsByClassName("buttonReadMore")
    // add event listener to the all elements of class buttonReadMore
    for (var i = 0; i < buttonsReadMore.length; i++){
        const articleHash = buttonsReadMore[i].id.slice(14, buttonsReadMore[i].id.length)
        buttonsReadMore[i].addEventListener('click', function () {showArticle(articleHash)})
    }
}


// hash creating

String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0; // Convert to 32bit integer
    }
    return hash
}


const articlesWrappers = document.getElementsByClassName("articlesWrapper")

const articlePageWrapper = document.getElementById("articlePageWrapper")
const articlesSearch = document.getElementById("articlesSearch")
const articlesHeading = document.getElementById("articlesHeading")
const articlesNavButton = document.getElementById("articlesNavButton")

function showArticle(articleHash) {
    console.log(`Showing article ${articleHash}`)

    for (var i = 0; i < articlesWrappers.length; i++){
        articlesWrappers[i].style.display = "none"
    }
    
    articlesNavButton.style.display = "flex"
    articlesSearch.style.display = "none"
    articlePageWrapper.innerHTML = ""
    articlePageWrapper.style.display = "flex"
    articlesHeading.style.display = "block"
    
    for (var i = 0; i < articlesList.length; i++){
        if (articlesList[i][0] == articleHash) {
            creatingArticle(i)
        }
    }
}

function creatingArticle(articlePosition) {
    articleInfo = articlesList[articlePosition]
    // create elements
    const articleHeading = document.createElement("h3")
    const articleHeadingWrapper = document.createElement("div")
    const articlesHashtag = document.createElement("a")
    const articleQuestionWrapper = document.createElement("div")
    const articleQuestionHeading = document.createElement("b")
    const articleQuestion = document.createElement("p")
    const articleDisclaimer = document.createElement("b")

    
    // add class
    articlesHashtag.classList.add("articlesHashtag")
    articleHeadingWrapper.classList.add("articleHeadingWrapper")
    articleQuestionWrapper.classList.add("articleQuestionWrapper")
    articleDisclaimer.classList.add("articleDisclaimer")


    // add content
    articleHeading.innerText = articleInfo[1]
    articleQuestionHeading.innerText = "Вопрос от читателя:"
    articleDisclaimer.innerText = "Ответы носят исключительно рекомендательный характер"
    if (articleInfo[4] != 0){
        articleQuestion.innerText = articleInfo[4]
    } else {
        articleQuestion.innerText = ""
    }

    if (articleInfo[2] != 0) {
        articlesHashtag.innerText = articleInfo[2]
    } else {
        articlesHashtag.innerText = ""
    }


    // append to the document
    articlePageWrapper.appendChild(articleHeadingWrapper)
    articleHeadingWrapper.appendChild(articleHeading)
    articleHeadingWrapper.appendChild(articlesHashtag)
    articlePageWrapper.appendChild(articleQuestionWrapper)
    articleQuestionWrapper.appendChild(articleQuestionHeading)
    articleQuestionWrapper.appendChild(articleQuestion)

    for (articleContent of articleInfo[5]) {
        if (articleContent[1] == "txt"){
            const articleContentElement = document.createElement("p")
            articleContentElement.innerText = articleContent[0]
            articlePageWrapper.appendChild(articleContentElement)
        } else if (articleContent[1] == "img"){
            const articleContentElementWrapper = document.createElement("div")
            const articleContentElement = document.createElement("img")
            articleContentElementWrapper.classList.add("contentImg")
            articleContentElementWrapper.setAttribute("isActive", "false")
            articleContentElement.src = articleContent[0]
            articlePageWrapper.appendChild(articleContentElementWrapper)
            articleContentElementWrapper.appendChild(articleContentElement)
        }
    }
    articlePageWrapper.appendChild(articleDisclaimer)


    // magnifying imgs
    const contentImgs = document.querySelectorAll(".contentImg");

    for (const content of contentImgs) {
        content.addEventListener("click", () => {
            if (content.getAttribute("isActive") == "false"){
                content.style.position = "fixed"
                content.style.display = "flex"
                content.style.width = "100%"
                content.style.height = "100%"
                content.style.top = "0"
                content.style.left = "0"
                content.style.justifyContent = "center"
                content.style.alignItems = "center"
                content.style.backgroundColor = "rgba(2, 8, 8, 0.9)"

                content.setAttribute("isActive", "true")
            } else {
                content.style.position = ""
                content.style.display = ""
                content.style.width = ""
                content.style.height = ""
                content.style.top = ""
                content.style.left = ""
                content.style.justifyContent = ""
                content.style.alignItems = ""
                content.style.backgroundColor = ""

                content.setAttribute("isActive", "false")
            }
        })
    }
}

// NAV button back
articlesNavButton.onclick = function() {
    articlesHeading.style.display = ""
    articlesNavButton.style.display = "none"
    articlesSearch.style.display = "flex"
    articlePageWrapper.style.display = "none"


    articlePageWrapper.innerHTML = ""

    for (var i = 0; i < articlesWrappers.length; i++){
        articlesWrappers[i].style.display = "flex"
    }
}

// slider