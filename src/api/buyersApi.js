const customers = [
    { id: '1', name: 'Tom', check: 100, purchases: 10, proceeds: 10629 },
    { id: '2', name: 'Bob', check: 567, purchases: 9, proceeds: 1629 },
    { id: '3', name: 'Bob', check: 130, purchases: 5, proceeds: 6029 },
    { id: '4', name: 'Tim', check: 300, purchases: 10, proceeds: 7029 },
    { id: '5', name: 'Lana', check: 8900, purchases: 10, proceeds: 1029 },
    { id: '6', name: 'Tom', check: 900, purchases: 10, proceeds: 1569 },
    { id: '7', name: 'Lana', check: 800, purchases: 20, proceeds: 1929 },
    { id: '8', name: 'Pet', check: 800, purchases: 10, proceeds: 2329 },
    { id: '9', name: 'Tom', check: 456, purchases: 21, proceeds: 5629 },
    { id: '10', name: 'Alex', check: 33, purchases: 10, proceeds: 6729 },
    { id: '11', name: 'Tom', check: 234, purchases: 22, proceeds: 9029 },
    { id: '12', name: 'Alex', check: 123, purchases: 2, proceeds: 1729 },
    { id: '13', name: 'Sara', check: 1100, purchases: 35, proceeds: 79 },
    { id: '14', name: 'Olga', check: 145, purchases: 2, proceeds: 1056 },
    { id: '15', name: 'Tom', check: 100, purchases: 13, proceeds: 1078 },
    { id: '16', name: 'Mikle', check: 110, purchases: 12, proceeds: 5190 }

]

export const buyersAPI = {

    getBuyers (){
         return customers
    },
    getBuyerData (id){
        return customers.find(customer => customer.id === id)
    }
}
