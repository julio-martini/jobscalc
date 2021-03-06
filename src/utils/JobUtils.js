module.exports = {
    remainingDays(job){
        //calculo de tempo retante
        const remainingDays = (job["total-hours"]/job["daily-hours"]).toFixed();
    
        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(remainingDays);
        const dueDateInMs = createdDate.setDate(dueDay);
        
        const timeDiffInMs = dueDateInMs - Date.now();
    
        //transormar milisegundos em dias
        const dayInMs = 1000*60*60*24;
        const dayDiff = Math.floor(timeDiffInMs/dayInMs);
    
        // restam x dias
        return dayDiff;
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
};