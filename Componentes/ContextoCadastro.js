import React, { createContext, useState } from 'react';

export const CadastroContext = createContext({});

export default function ContextoCadastro({ children }) {
  const produtos = [
    {
      codigo: 1000,
      descricao: 'Teclado gamer RGB',
      preco: 758.99,
      quantidade: 237,
    },
    {
      codigo: 1001,
      descricao: 'Memória RAM 16GB',
      preco: 459.99,
      quantidade: 436,
    },
    {
      codigo: 1002,
      descricao: 'Ryzen 9 5900x',
      preco: 3249.99,
      quantidade: 244,
    },
    { codigo: 1003, descricao: 'RTX 3090TI', preco: 12990.0, quantidade: 196 },
  ];

  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState();
  const [quantidade, setQuantidade] = useState();
  const [lista, setLista] = useState(produtos);

  const codigos = lista.map((l) => l.codigo);

  return (
    <CadastroContext.Provider
      value={{
        codigo,
        setCodigo,
        descricao,
        setDescricao,
        preco,
        setPreco,
        quantidade,
        setQuantidade,
        lista,
        setLista,
        codigos,
      }}>
      {children}
    </CadastroContext.Provider>
  );
}
