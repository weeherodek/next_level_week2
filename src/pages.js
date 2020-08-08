const Database = require('./database/db')

const { weekdays, subjects, getSubject, convertHoursToMinutes} = require('./utils/format')
const db = require('./database/db')

async function pageStudy(req,res) {
    let filters = req.query


    if(!filters.subject || !filters.weekday || !filters.time){
        return res.render('study.html', { filters, subjects, weekdays})
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
    SELECT classes.* , proffys.*
    FROM proffys
    JOIN classes on (classes.proffy_id =  proffys.id)
    WHERE EXISTS(
        SELECT class_schedule.*
        from class_schedule
        where class_schedule.class_id = classes.id
        and class_schedule.weekday = ${filters.weekday}
        and class_schedule.time_from <= ${timeToMinutes}
        and class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}'`


    try {
        const db = await Database

        const proffys = await db.all(query)

        proffys.map((proffy)=>{
            proffy.subject = getSubject(proffy.subject)
        })

        return res.render('study.html',{ proffys, subjects, filters, weekdays })
    } catch (error) {
        console.log('erro:', error)
    }
    
}

function pageLanding(req,res){
    res.render('index.html')
}


function pageGiveClasses(req,res){
    
    res.render('give-classes.html', {subjects, weekdays})
}

async function saveClasses(req,res){
    const createProffy = require('./database/createProffy')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday,index)=>{
        return {
            weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to:convertHoursToMinutes(req.body.time_to[index])
        }
    })


    try{

    const db = await Database
    await createProffy(db,{ proffyValue, classValue, classScheduleValues})

    let queryString = "?subject="+ req.body.subject
    queryString += "&weekday=" + req.body.weekday[0]
    queryString += "&time=" + req.body.time_from[0]
    
    return res.redirect('/study' + queryString)
    }catch(error){
        console.error(error)
    }  
}

module.exports = {
    pageStudy,
    pageLanding,
    pageGiveClasses,
    saveClasses
}