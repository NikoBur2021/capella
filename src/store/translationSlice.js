import {createSlice} from "@reduxjs/toolkit";

const enMap = new Map();
enMap.set('hello', 'Welcome to our website')
enMap.set('homeHeaderBtn','Home')
enMap.set('HomePhotoAlbum','Photo Album')
enMap.set('HomeArranged','Arranged for male trio by N. Buryakov')
enMap.set('aboutHeaderBtn','About')
enMap.set('performancesHeaderBtn','Performances')
enMap.set('donateHeaderBtn','Donate')
enMap.set('contactHeaderBtn','Contact Us')
enMap.set('aboutHomeBtn','An a capella performance of breathtakingly beautiful Russian Orthodox church music, sung by an ensemble of professional musicians')
enMap.set('performancesHeader','MUSIC FOR THE DIVINE LITURGY')
enMap.set('performancesHeader1','that will be played today')
enMap.set('performancesProgram','PROGRAM')
enMap.set('performancesEktenia','1. THE GREAT EKTENIA - K. Shvedov')
enMap.set('performancesFirstAntifon','2. BLESSINGS, MY SOUL, OF THE LORD - P. Chesnokov, op, N1')
enMap.set('performancesSecondAntifon','3. PRAISE, IN MY SOUL, THE LORD - I. Valyaev N7')
enMap.set('performancesEdinorodni','4. THE ONLY BEGOTTEN SON - M. Rechkunov')
enMap.set('performancesVoZarstvii','5. IN YOUR KINGDOM - A. Andreev')
enMap.set('performancesPriidite','6. COME, LET US WORSHIP- Obihodniy chant')
enMap.set('performancesTrisvaytoe','7. HOLY GOD, HOLY MIGHTY- Obihodniy chant')
enMap.set('performancesGreat','8. GREAT LITANY- (after the Gospel) - K. Shvedov, op 40')
enMap.set('performancesHeruvim','9. THE CHERUBIC HYMN - K. Shvedova, op. 40. N17')
enMap.set('performancesEktenia','10. LITANY OF SUPPLICATION - Deacon Sergiy Trubachev')
enMap.set('performancesMilost','11. A MERCY OF PEACE - A. Nikolsky op. 45 N3')
enMap.set('performancesDostoino','12. IT IS TRULY RIGHT - P. Dinev')
enMap.set('performancesVidehom','13. THE TRUE LIGHT - Nathanael (Bochkalo)')
enMap.set('currentProgram','Current Program')
enMap.set('aboutSPRING','SPRING 2021')
enMap.set('aboutFirstPer','First performance after lockdown in Central Park NY')
enMap.set('aboutLiturgy','THE LITYRGY')
enMap.set('aboutCherubim','Hymn of the Cherubim - Pavel Chesnokov')
enMap.set('aboutRehearsel','THE REHEARSAL')
enMap.set('aboutRehSer','The rehearsal after our service')
enMap.set('aboutSheep','SHEEP MEADOW')
enMap.set('aboutSheepMead','\'A mercy of peace\' for the first time in a sheep meadow in Central Park New York')
enMap.set('footerSpirit','SPIRITUAL RUSSIAN MUSIC every SUNDAY')
enMap.set('footerWhere','When: 9:30 -11:00am Where: 8645 18th Avenue Brooklyn NY')
enMap.set('footerPlease','Please like and subscribe our Channel!')
enMap.set('donateAlldona','All donations go directly towards supporting the current Nikodim Capella of 2021')
enMap.set('donateMakeAdon','MAKE A DONATION')
enMap.set('donateSoThat','so that we may continue to share our music during these challenging times.')
enMap.set('donateAllperfor','All performing singers, have been impacted by COVID-19, and thus your support means a great deal to us.')
enMap.set('donateThank','Thank you for your generosity!')
enMap.set('homeSuggested','Suggested donation')
enMap.set('contactUs','CONTACT US')
enMap.set('forInformation1','For information about bookings, public shows or any other general inquiries,')
enMap.set('forInformation2','please contact our business manager, Nikodim Buryakov, at')
enMap.set('forInformation3','(646) 309-5762 or nikodimburyakov@gmail.com,')
enMap.set('heruvim','heruvim hymn')
enMap.set('sever','Northern Duo')
enMap.set('sever1','Authentic music of 17 century Eastern Orthodox Church')
enMap.set('seeMyVideos','See my Video')
enMap.set('video','video')
enMap.set('download','Click to download')





const ruMap = new Map();
ruMap.set('hello', 'Добро пожаловать на наш сайт')
ruMap.set('homeHeaderBtn','Главная')
ruMap.set('HomePhotoAlbum','Фото Альбом')
ruMap.set('HomeArranged','Переложение написано для трехголосного мужского ансамбля (Н. Буряков)')
ruMap.set('aboutHeaderBtn','О нас')
ruMap.set('performancesHeaderBtn','ПРОГРАММА')
ruMap.set('donateHeaderBtn','Донат')
ruMap.set('contactHeaderBtn','Контакты')
ruMap.set('aboutHomeBtn','Потрясающей красоты русская православная церковная музыка в исполнии ансамбля профессиональных музыкантов')
ruMap.set('performancesHeader','ПЕСНОПЕНИЯ БОЖЕСТВЕННОЙ ЛИТУРГИИ')
ruMap.set('performancesHeader1','которые прозвучат сегодня')
ruMap.set('performancesProgram','ПРОГРАММА')
ruMap.set('performancesEktenia','1. ЕКТЕНИЯ ВЕЛИКАЯ – К. Шведов')
ruMap.set('performancesFirstAntifon','2. БЛАГОСЛОВИ, ДУШЕ МОЯ, ГОСПОДА – П. Чесноков, op,N1')
ruMap.set('performancesSecondAntifon','3. ХВАЛИ, ДУШЕ МОЯ, ГОСПОДА – И. Валяев N7')
ruMap.set('performancesEdinorodni','4. ЕДИНОРОДНЫЙ СЫНЕ - М. Речкунов')
ruMap.set('performancesVoZarstvii','5. ВО ЦАРСТВИИ ТВОЕМ – A. Андреев ')
ruMap.set('performancesPriidite','6. ПРИИДИТЕ, ПОКЛОНИМСЯ – Обиходного распева ')
ruMap.set('performancesTrisvaytoe','7. ТРИСВЯТОЕ – Обиходного распева')
ruMap.set('performancesGreat','8.  ЕКТЕНИЯ СУГУБАЯ – (после Евангелия) – К. Шведов, op 40 ')
ruMap.set('performancesHeruvim','9. ХЕРУМСКАЯ ПЕСНЬ – К. Шведова, ор.40. N17')
ruMap.set('performancesEktenia','10. ЕКТЕНИЯ ПРОСИТЕЛЬНАЯ – Диакон Сергий Трубачев')
ruMap.set('performancesMilost','11. МИЛОСТЬ МИРА – А. Никольский ор. 45 N3')
ruMap.set('performancesDostoino','12. ДОСТОЙНО ЕСТЬ - П. Динев')
ruMap.set('performancesVidehom','13. ВИДЕХОМ СВЕТ ИСТИНЫ – Иеромонах Нафанаил (Бочкало)')
ruMap.set('currentProgram','Текущая программа')
ruMap.set('aboutSPRING','ВЕСНА')
ruMap.set('aboutFirstPer','Первое выступление после карантина в Центральном парке Нью-Йорка')
ruMap.set('aboutLiturgy','ЛИТУРГИЯ')
ruMap.set('aboutCherubim','Херувимская песнь - Павел Чесноков')
ruMap.set('aboutRehearsel','РЕПЕТИЦИЯ')
ruMap.set('aboutRehSer','Репетиция после службы')
ruMap.set('aboutSheep','ОВЕЧИЙ ЛУГ')
ruMap.set('aboutSheepMead','Впервые \'Милость Мира\' на овечем лугу в Центральном Парке Нью-Йорка')
ruMap.set('footerSpirit','Русская Духовная Музыка каждое Воскресенье')
ruMap.set('footerWhere','Когда: 9:30 -11:00am Где: 8645 18th Avenue Brooklyn NY')
ruMap.set('footerPlease','Пожалуйста поставьте лайк и подписывайтесь на наш канал!')
ruMap.set('donateAlldona','Все пожертвования идут непосредственно на поддержку "Никодим-Капеллa 2021"')
ruMap.set('donateMakeAdon','СДЕЛАТЬ ПОЖЕРТВОВАНИЕ')
ruMap.set('donateSoThat','чтобы мы могли продолжать делиться своей музыкой в эти трудные времена.')
ruMap.set('donateAllperfor','Все певцы пострадали от COVID-19, и поэтому ваша поддержка, для нас очень много значит.')
ruMap.set('donateThank','Благодарим вас за щедрость!')
ruMap.set('homeSuggested','Предлагаемое пожертвование')
ruMap.set('contactUs','КОНТАКТЫ')
ruMap.set('forInformation1','Для получения информации о том как заказать хор, публичных выступлениях или любых других вопросах,')
ruMap.set('forInformation2','обращайтесь к художественному руководителю и дирижеру капеллы, Никодиму Бурякову, по')
ruMap.set('forInformation3','(646) 309-5762 or nikodimburyakov@gmail.com,')
ruMap.set('heruvim','Херувимы')
ruMap.set('sever','Cеверное Двухголосие')
ruMap.set('sever1','Аутентичная музыка Восточной Православной Церкви 17 века')
ruMap.set('seeMyVideos','Мое Видео')
ruMap.set('video','Мое Видео')
ruMap.set('download','Cкачать pdf')


export const translationSlice = createSlice({
    name: 'translation',
    initialState: {
        language: 'En',
        translationMap: enMap
    },
    reducers: {
        switchToEn: state => {
            state.language = 'EN';
            state.translationMap = enMap;

        },
        switchToRu: state => {
            state.language = 'RU';
            state.translationMap = ruMap;
        },
    }
})
export default translationSlice.reducer
export const {switchToRu,switchToEn} = translationSlice.actions // экспортируем редюсеры и actions