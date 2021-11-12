// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

// il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
// gli oggetti avranno questo formato:{ text: 'Fare la spesa', done: true },{ text: 'Fare il bucato', done: false }

// quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
// Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
// gli unici true saranno alcuni nei dati di partenza.

var app = new Vue({
    el: '#container',
    data: {
        newTask: [
            {
                text: "",
                done: false
            }
        ],
        tasks: [
            {
                text: "Fare la spesa",
                done: false
            },
            {
                text: "Fare il bucato",
                done: false
            },
            {
                text: "Fare una giravolta sulla sedia",
                done: true
            },
            {
                text: "Fare l'esercitazione boolean",
                done: false
            },
            {
                text: "Respirare",
                done: true
            },
            {
                text: "Organizzare il viaggio ai Caraibi",
                done: false
            }
        ]
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask);
            this.newTask = [
                {
                    text: "",
                    done: false
                }
            ];
        },
        removeTask(index){
            this.tasks.splice(index,1);
        }
    }
})