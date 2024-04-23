import { useState } from "react";
import "./Contato.css";

export const Contato = ({ categoria }) => {

    const [nome1, setNome1] = useState('');
    const [nome2, setNome2] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            alert("Sua mensagem foi enviada com sucesso!");

            setNome1("");
            setNome2("");
            setEmail("");
            setMensagem("");
        } catch (erro) {
            console.error('Erro ao enviar o formulário:', erro);
        }
    };

    return (
        <div id={categoria}>
            <div>
                <h2>Preencha o formulário abaixo para entrar em contato!</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Primeiro nome:</label>
                        <input
                            type="text"
                            id="nome1"
                            name="nome1"
                            value={nome1}
                            onChange={(e) => setNome1(e.target.value)}
                            required
                            placeholder="Primeiro nome"
                        />
                        <input
                            type="text"
                            name="nome2"
                            id="nome2"
                            value={nome2}
                            onChange={(e) => setNome2(e.target.value)}
                            required
                            placeholder="Último nome"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="algumemail@gmail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Nos diga o motivo do seu contato:</label>
                        <textarea
                            name="mensagem"
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </div>
                    <button>ENVIAR MENSAGEM</button>
                </form>
            </div>
        </div>
    );
}