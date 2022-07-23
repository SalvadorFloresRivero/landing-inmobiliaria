// Clase Tools
class Tools {

    getEntidad(sState){

		switch (sState) {
			case '1': return "Aguascalientes"
					break
			case '2': return "Baja California"
					break
			case '3': return "Baja California Sur"
					break
			case '4':	return "Campeche"
					break
			case '5': return "Coahuila"
					break
			case '6': return "Colima"
					break
			case '7': return "Chiapas"
					break
			case '8': return "Chihuahua"
					break
			case '9': return "Ciudad de México"
					break
			case '10': return "Durango"
					break
			case '11': return "Guanajuato"
					break
			case '12': return "Guerrero"
					break
			case '13': return "Hidalgo"
					break
			case '14': return "Jalisco"
					break
			case '15': return "Estado de México"
					break
			case '16': return "Michoacán"
					break
			case '17': return "Morelos"
					break
			case '18': return "Nayarit"
					break
			case '19': return "Nuevo León"
					break
			case '20': return "Oaxaca"
					break
			case '21': return "Puebla"
					break
			case '22': return "Querétaro"
					break
			case '23': return "Quintana Roo"
					break
			case '24': return "San Luis Potosí"
					break
			case '25': return "Sinaloa"
					break
			case '26': return "Sonora"
					break
			case '27': return "Tabasco"
					break
			case '28': return "Tamaulipas"
					break
			case '29': return "Tlaxcala"
					break
			case '30': return "Veracruz"
					break
			case '31': return "Yucatán"
					break
			case '32': return "Zacatecas"
					break
            default: "Ninguna"
		}
	}
    getHouseType(houseType){

		switch (houseType) {
			case '1': return "Departamento"
					break
			case '2': return "Casa"
					break
			case '3': return "Terreno"
					break
			case '4':	return "Rentar"
					break
            default: "Ninguna"
        }
    }
}
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
        this.encabezado=resultado.innerHTML
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
    loadUser(id,name,phon,state,houseType) {

        document.querySelector('#mod_names').value=name
        document.querySelector('#mod_phon').value=phon
        document.querySelector('#mod_state').value=state
        document.querySelector('#mod_houseType').value=houseType

    }
    showUser(inserUser){

        let contador = parseInt(inserUser.id)+1
        let sState = myTools.getEntidad(inserUser.state)
        let sHouseType = myTools.getHouseType(inserUser.houseType)

        resultado.innerHTML += `<tr>
        <td>${contador}</td>
        <td>${inserUser.name}</td>
        <td>${inserUser.phon}</td>
        <td>${sState}</td>
        <td>${sHouseType}</td>
        <td><a onclick=\"myUser.loadUser( ${inserUser.id},'${inserUser.name}','${inserUser.phon}',${inserUser.state},${inserUser.houseType});\" style='color:#000000;' data-bs-toggle="modal" data-bs-target="#exampleModal" data-placement='top' title='Editar usuario' style='cursor:pointer'><img src='img/editar.png' alt='Farheso' width='20' height='20'/></a></td>
        <td><a onclick=\"myUser.deleteUser( ${inserUser.id});\"><img src='img/eliminar.png' alt='Farheso' width='20' height='20'/></a></td>
        </tr>`

}
    newUser (){

        let id = 0
        let names = document.querySelector('#names').value;
        let phon = document.querySelector('#phon').value;
        let state = document.querySelector('#state').value;
        let houseType = document.querySelector('#houseType').value;
        let dates = JSON.parse( localStorage.getItem('myUsers') )

        if(dates == null){
            let inserUser = new User(id,names,phon,state,houseType)
            this.showUser(inserUser)
            myUsers.push(inserUser)
            localStorage.setItem('myUsers', JSON.stringify(myUsers))
        }
        else{
            console.log("Entro")

            dates.forEach(elemen=>{
                id+=1
                console.log("ids:"+id)
            })

            let inserUser = new User(id,names,phon,state,houseType)
            localStorage.removeItem("myUsers")
            dates.push(inserUser)
            this.showUser(inserUser)
            localStorage.setItem('myUsers', JSON.stringify(dates))

        }
    }
    deleteUser (idDelete){

        let myUsersDelete = JSON.parse( localStorage.getItem('myUsers') )
        localStorage.removeItem("myUsers")
        resultado.innerHTML=this.encabezado
        const myUsersNuevos = []

        let idcount=0
        myUsersDelete.forEach(elemen=>{
            if( myUsersDelete[idcount].id != idDelete ){
                myUsersNuevos.push(myUsersDelete[idcount])
                this.showUser(myUsersDelete[idcount])
                console.log(idcount)
            }
            idcount+=1
        })

        localStorage.setItem('myUsers', JSON.stringify(myUsersNuevos))

    }
    updateUser() {

       /*  let idUpdate = document.querySelector('#id').value;
        let names = document.querySelector('#names').value;
        let phon = document.querySelector('#phon').value;
        let state = document.querySelector('#state').value;
        let houseType = document.querySelector('#houseType').value;

        myUsersUpdate = JSON.parse( localStorage.getItem('myUsers') )

        let idcount=0;
        myUsersUpdate.forEach(elemen=>{
            if( myUsersUpdate[idcount].id == idUpdate)
            console.log("Este es el objeto a modificar "+ myUsersUpdate[idcount].id);
        }) */
        console.log("Hola desde el update")

    }

}


const myTools = new Tools()
const myUser = new UserCRUD()

