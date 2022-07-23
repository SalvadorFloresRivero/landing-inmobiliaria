//localStorage.setItem('countUsers', '0');
/*
localStorage.setItem('mySongs', JSON.stringify(mySongs));

class MusicPlayer {
    constructor(querySelector) {
        this.songs = JSON.parse( localStorage.getItem('mySongs') )
*/

class User {
    constructor(id, name, phon, state, houseType) {
        this.id=id
        this.name = name
        this.phon = phon
        this.state = state
        this.houseType = houseType
    }
}

const myUsers = []

class UserCRUD {

    constructor() {
        this.dates = JSON.parse( localStorage.getItem('myUsers') )
        if(this.dates != null){
            let i = 0
            console.log("Entro")
            this.dates.forEach(elemen=>{
                this.showUser(this.dates[i])
                i+=1
            })
        }
    }
    showUser(inserUser){

        let contador = parseInt(inserUser.id)

        resultado.innerHTML += `<tr>
        <td>${contador}</td>
        <td>${inserUser.name}</td>
        <td>${inserUser.phon}</td>
        <td>${inserUser.state}</td>
        <td>${inserUser.houseType}</td>
        <td><img src='img/editar.png' alt='Farheso' width='20' height='20'/></td>
        <td><img src='img/eliminar.png' alt='Farheso' width='20' height='20'/></td>
        </tr>`

    }
    newUser (){

        let lenghtData = 0
        let id = myUsers.length
        let names = document.querySelector('#names').value;
        let phon = document.querySelector('#phon').value;
        let state = document.querySelector('#state').value;
        let houseType = document.querySelector('#houseType').value;

        let inserUser = new User(id,names,phon,state,houseType)

        this.showUser(inserUser)
        myUsers.push(inserUser)

        let dates = JSON.parse( localStorage.getItem('myUsers') )

        if(dates == null){
            localStorage.setItem('myUsers', JSON.stringify(myUsers))
        }
        else{
            console.log("Entro")
            dates.forEach(elemen=>{
                    localStorage.removeItem("myUsers")
                    dates.push(inserUser)
                    console.log("Entro 2" + dates.name)
                    localStorage.setItem('myUsers', JSON.stringify(dates))

            })
        }


        //myUsers.push(inserUser)
        //https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

        //localStorage.setItem('myUsers', JSON.stringify(myUsers))


        localStorage.removeItem("MySongs")

        console.log("Nombres: "+ names);
        console.log("Telefono: "+ phon);
        console.log("Entidad: "+ state);
        console.log("Tipo de casa: "+ houseType);

        /* myUsers.forEach(elemen=>{
            console.log("Arreglo: "+ myUsers[id].id);
            console.log("Arreglo: "+ myUsers[id].name);
        }) */
       // this.showUser(inserUser)

    }
    deleteUser (){

    }
    updateUser() {
        let idUpdate = document.querySelector('#id').value;
        let names = document.querySelector('#names').value;
        let phon = document.querySelector('#phon').value;
        let state = document.querySelector('#state').value;
        let houseType = document.querySelector('#houseType').value;

        myUsersUpdate = JSON.parse( localStorage.getItem('myUsers') )

        let idcount=0;
        myUsersUpdate.forEach(elemen=>{
            if( myUsersUpdate[idcount].id == idUpdate)
            console.log("Este es el objeto a modificar "+ myUsersUpdate[idcount].id);
        })

    }
}


//const myMusicPlayer = new MusicPlayer(mySongs,'#titulo')
const myUser = new UserCRUD( )