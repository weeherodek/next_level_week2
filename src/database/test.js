const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (database)=>{
    proffyValue = {
        name: 'Philipe Herodek',
        avatar: 'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/90099520_3533490840058395_4222909418494230528_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=xx3T3cURmEUAX8BZdmW&_nc_ht=scontent.fgru5-1.fna&oh=a34a378396b574438fed659779c5d479&oe=5F501C52',
        whatsapp: '11952226777',
        bio: 'Tio da informática'
    }

    classValue ={
        subject: "Química",
        cost: "69"
    }

    classScheduleValues = [
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 5,
        time_from: 220,
        time_to: 350
    }
]

// await createProffy(database, {proffyValue, classValue, classScheduleValues})

// const proffysall = await database.all("Select * from classes")
// console.log(proffysall)


})