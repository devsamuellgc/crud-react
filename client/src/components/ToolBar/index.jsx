import DialogModal from "../Modal";

export default function ToolBar({ handleSort, handleSearch }) {
  return (
    <div className="mb-8 flex justify-between items-center py-5 px-3 border rounded-md bg-white shadow">
      <h2 className="uppercase text-2xl font-bold">Produtos</h2>
      <div className="flex gap-8 items-center">
        <input
          className=" border-2 outline-none rounded-md py-1 px-2"
          type="text"
          placeholder="Pesquise aqui..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border-2 rounded-md py-1 px-2"
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <DialogModal header="Novo Produto" titulo={"Adicionar"}>
          <h1>Teste</h1>
        </DialogModal>
      </div>
    </div>
  );
}
