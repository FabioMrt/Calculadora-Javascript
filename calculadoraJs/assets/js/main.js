    function criaCalculadora () {
        return {
        //atributes
            display: document.querySelector('.display'),

            inicia() {
               this.buttonClick();
               this.pressEnter()
            },

            pressEnter() {
                this.display.addEventListener('keyup', e => {
                    if (e.keyCode === 13) {
                        this.realizaConta();
                    }
                });

            },

            realizaConta() {
                let conta = this.display.value;

                try {
                    conta = eval(conta);

                    if(!conta) {
                        alert ('Conta inválida');
                        return;
                    }

                    this.display.value = String(conta);
                } catch (e) {
                    alert ('Conta inválida');
                    return;
                }
            },
            
            clearDisplay() {
                this.display.value = '';
            },

            delNum() {
                this.display.value = this.display.value.slice(0, -1);
            },


        //methods

            buttonClick() {
                document.addEventListener('click', e => {
                    const el = e.target;

                    if (el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);

                    }
                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')){
                        this.delNum();
                    }
                    if(el.classList.contains('btn-eq')){
                        this.realizaConta();
                    }

                    this.display.focus();
                });
            },

        
            btnParaDisplay(value) {
                this.display.value += value;
            }
        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();