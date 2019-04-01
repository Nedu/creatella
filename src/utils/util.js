const getDateFormatShort = (date) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return ` Added ${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export const formatDate = (date) => {
    const currentDate = new Date(); // get current date
    const catalogDate = new Date(date)

    const timeDifference = Math.abs(currentDate.getTime() - catalogDate.getTime());     // time difference
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // day difference

    if (dayDifference > 7) {
        return getDateFormatShort(catalogDate);
    }
    return `Added ${dayDifference} days ago`
}

export const formatCurrency = (price) => {
    return (price / 100).toFixed(2)
}