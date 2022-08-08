export const formatDate = (date: string) => {
    const d = new Date(date)
    const day = d.getDate(),
        month = d.getMonth(),
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes()

    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`
    return formattedDate
}
