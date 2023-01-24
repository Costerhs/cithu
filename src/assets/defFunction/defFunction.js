const setCookie = (name, value, days = 3) => {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
}

const getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return JSON.parse(parts.pop().split(";").shift());
}

const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

const getLStorage = (name) => {
    return localStorage.getItem(name)
}

const setUniqValue = (arr) => {
    return arr.filter((item, pos) => {
        return arr.indexOf(item) === pos;
    })
}

const filterOfRepos = (arr, lang, num) => {
    return arr.filter(el => {
        if (lang) {
            return el.language == lang
        }
        return el
    }).slice(0, num)
}
export { setCookie, getCookie, deleteCookie, getLStorage, setUniqValue, filterOfRepos }