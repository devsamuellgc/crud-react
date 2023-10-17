export default function Table({ products, handleLimit, deleteFunction }) {
  function handleDelete(id) {
    deleteFunction(id);
  }

  return (
    <div className="px-12 py-5 border rounded-md bg-white shadow">
      <table>
        <thead className="border-b">
          <tr>
            <th className="pb-3 w-1/6 text-center">#</th>
            <th className="pb-3 w-1/6 text-center">Imagem</th>
            <th className="pb-3 w-1/6 text-center">Título</th>
            <th className="pb-3 w-1/6 text-center">Categoria</th>
            <th className="pb-3 w-1/6 text-center">Preço</th>
            <th className="pb-3 w-1/6 text-center">Avaliação</th>
            <th className="pb-3 w-1/6 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td className="py-3 text-center">{product.id}</td>
                <td className="py-3 flex items-center justify-center">
                  <img
                    className="rounded-full w-24 h-24 object-contain"
                    src={product.image}
                    alt=""
                  />
                </td>
                <td className="py-3 text-center">{product.title}</td>
                <td className="py-3 text-center">{product.category}</td>
                <td className="py-3 text-center">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="py-3 text-center">{product.rating.rate}</td>
                <td className="py-3 text-center">
                  <button
                    className="
                      border 
                      px-3 
                      py-2 
                      rounded 
                      bg-red-600 
                      text-white
                      hover:bg-red-500
                    "
                    onClick={() => handleDelete(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex w-full items-center justify-end">
        <select onChange={(e) => handleLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}
