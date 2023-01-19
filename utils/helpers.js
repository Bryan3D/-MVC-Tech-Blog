module.exports= {
    // Function to get the current date
    format_date: (date) => {
        return date.toLocaleDateString();
    },

    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
},
 get_Emoji:() => {
    const randomNum = Math.random();
    if (randomNum > 0.7) {
        return `<span for="img" alt="doge">🐶</span>`;
    } else if (randomNum > 0.4) {
        return `<span for="img" alt="cat">🐱</span>`;
    } else {
        return `<span for="img" alt="bird">🐦</span>`;
    }
},
};
