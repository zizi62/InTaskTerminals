

export const terminalsApi = {
    
    setTerminal(terminalList) {
        let terminalListAsString = JSON.stringify(terminalList)
        localStorage.setItem('terminals', terminalListAsString)
    },

    getTerminals() {
        const terminals = JSON.parse(localStorage.getItem('terminals'))
        return terminals || []
    }

}