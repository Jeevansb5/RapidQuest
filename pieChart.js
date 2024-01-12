let circularProgress = document.getElementsByClassName('circular-progress'),
    progressValue = document.getElementsByClassName('progress-value');

let progressAvgStartValue = 0,
    progressAvgEndValue = 78,
    speed = 20;

let progressTopStartValue = 0,
    progressTopEndValue = 95;

let progressMeStartValue = 0,
    progressMeEndValue = 59;


let averageProgress = setInterval(() => {
    progressAvgStartValue++;

    progressValue[0].textContent = `${progressAvgStartValue}%`
    circularProgress[0].style.background = `conic-gradient(rgb(0 255 207) ${progressAvgStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

    if (progressAvgStartValue == progressAvgEndValue) {
        clearInterval(averageProgress)
    }
}, speed)

let topProgress = setInterval(() => {
    progressTopStartValue++;

    progressValue[1].textContent = `${progressTopStartValue}%`
    circularProgress[1].style.background = `conic-gradient(rgb(0 255 207) ${progressTopStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

    if (progressTopStartValue == progressTopEndValue) {
        clearInterval(topProgress)
    }
}, speed)

let meProgress = setInterval(() => {
    progressMeStartValue++;

    progressValue[2].textContent = `${progressMeStartValue}%`
    circularProgress[2].style.background = `conic-gradient(rgb(0 255 207) ${progressMeStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

    if (progressMeStartValue == progressMeEndValue) {
        clearInterval(meProgress)
    }
}, speed)


let a = document.getElementById('a'),
    sal = document.getElementById('sal'),
    gen = document.getElementById('gen');

let age = a.value,
    salary = sal.value,
    gender = gen.value;

onChangeAge = (x) => {

    progressAvgStartValue = 0,
    progressAvgEndValue = 78,

    progressTopStartValue = 0,
    progressTopEndValue = 95;

    progressMeStartValue = 0,
    progressMeEndValue = 59;

    age = x;

    if (age == 30) {
        progressAvgEndValue = 78
        progressTopEndValue=95
        progressMeEndValue = 59;
    } else if (age == 40) {
        progressAvgEndValue = 73
        progressTopEndValue=92
        progressMeEndValue = 62;
    } else if (age == 50) {
        progressAvgEndValue = 69
        progressTopEndValue=85
        progressMeEndValue = 55;
    } else if (age == 60) {
        progressAvgEndValue = 80
        progressTopEndValue=97
        progressMeEndValue = 68;
    }

    let averageProgress = setInterval(() => {
        progressAvgStartValue++;

        progressValue[0].textContent = `${progressAvgStartValue}%`
        circularProgress[0].style.background = `conic-gradient(rgb(0 255 207) ${progressAvgStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressAvgStartValue == progressAvgEndValue) {
            clearInterval(averageProgress)
        }
    }, speed)


    let topProgress = setInterval(() => {
        progressTopStartValue++;

        progressValue[1].textContent = `${progressTopStartValue}%`
        circularProgress[1].style.background = `conic-gradient(rgb(0 255 207) ${progressTopStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressTopStartValue == progressTopEndValue) {
            clearInterval(topProgress)
        }
    }, speed)

    let meProgress = setInterval(() => {
        progressMeStartValue++;

        progressValue[2].textContent = `${progressMeStartValue}%`
        circularProgress[2].style.background = `conic-gradient(rgb(0 255 207) ${progressMeStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressMeStartValue == progressMeEndValue) {
            clearInterval(meProgress)
        }
    }, speed)
}
onChangeSalary = (x) => {

    progressAvgStartValue = 0,
    progressAvgEndValue = 78,

    progressTopStartValue = 0,
    progressTopEndValue = 95;

    progressMeStartValue = 0,
    progressMeEndValue = 59;

    salary = x;

    if (salary == 25) {
        progressAvgEndValue = 78
        progressTopEndValue=95
        progressMeEndValue = 59;
    } else if (salary == 35) {
        progressAvgEndValue = 73
        progressTopEndValue=92
        progressMeEndValue = 62;
    }  else if (salary == 50) {
        progressAvgEndValue = 80
        progressTopEndValue=97
        progressMeEndValue = 68;
    }

    let averageProgress = setInterval(() => {
        progressAvgStartValue++;

        progressValue[0].textContent = `${progressAvgStartValue}%`
        circularProgress[0].style.background = `conic-gradient(rgb(0 255 207) ${progressAvgStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressAvgStartValue == progressAvgEndValue) {
            clearInterval(averageProgress)
        }
    }, speed)


    let topProgress = setInterval(() => {
        progressTopStartValue++;

        progressValue[1].textContent = `${progressTopStartValue}%`
        circularProgress[1].style.background = `conic-gradient(rgb(0 255 207) ${progressTopStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressTopStartValue == progressTopEndValue) {
            clearInterval(topProgress)
        }
    }, speed)

    let meProgress = setInterval(() => {
        progressMeStartValue++;

        progressValue[2].textContent = `${progressMeStartValue}%`
        circularProgress[2].style.background = `conic-gradient(rgb(0 255 207) ${progressMeStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressMeStartValue == progressMeEndValue) {
            clearInterval(meProgress)
        }
    }, speed)
}
onChangeGender = (x) => {

    progressAvgStartValue = 0,
    progressAvgEndValue = 78,

    progressTopStartValue = 0,
    progressTopEndValue = 95;

    progressMeStartValue = 0,
    progressMeEndValue = 59;

    gender = x;

    if (gender == "Male") {
        progressAvgEndValue = 78
        progressTopEndValue=95
        progressMeEndValue = 59;
    } else if (gender == "Female") {
        progressAvgEndValue = 73
        progressTopEndValue=85
        progressMeEndValue = 62;
    }

    let averageProgress = setInterval(() => {
        progressAvgStartValue++;

        progressValue[0].textContent = `${progressAvgStartValue}%`
        circularProgress[0].style.background = `conic-gradient(rgb(0 255 207) ${progressAvgStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressAvgStartValue == progressAvgEndValue) {
            clearInterval(averageProgress)
        }
    }, speed)


    let topProgress = setInterval(() => {
        progressTopStartValue++;

        progressValue[1].textContent = `${progressTopStartValue}%`
        circularProgress[1].style.background = `conic-gradient(rgb(0 255 207) ${progressTopStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressTopStartValue == progressTopEndValue) {
            clearInterval(topProgress)
        }
    }, speed)

    let meProgress = setInterval(() => {
        progressMeStartValue++;

        progressValue[2].textContent = `${progressMeStartValue}%`
        circularProgress[2].style.background = `conic-gradient(rgb(0 255 207) ${progressMeStartValue * 3.6}deg,rgb(75 255 194 / 16%) 0deg)`

        if (progressMeStartValue == progressMeEndValue) {
            clearInterval(meProgress)
        }
    }, speed)
}