const callUser = (person:User) => {
    console.log(person)
}

interface User{
    id: number,
    name: string,
    email: string,
    phone: number,
    isGraduated: boolean
}

const newUser: User = {
    id: 1,
    name: "adedokun faith",
    email: "faithadedokun2018@gmail.com",
    phone: +234906311875,
    isGraduated: true
}

callUser(newUser)