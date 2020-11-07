const Database = require('./db');
// const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    // await saveOrphanage(db, {
    await db.run(`
         INSERT INTO orphanages (
             lat,
             lng,
             name,
             about,
             whatsapp,
             images,
             instructions,
             opening_hours,
             open_on_weekends
         ) VALUES (
             "-19.9244387",
             "-43.951956",
             "Lar das meninas",
             "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
             "03198764848",
             "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             "Venha se sentir a vontade e traga muito amor e paciência para dar.",
             "Horário de visitas das 8h até 18h",
             "0"
         );
    `) 

    // //consultar os dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

   // console.log(await db.run('DELETE FROM orphanages'))
})