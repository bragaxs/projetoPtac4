import "../global.css";


export default function Cardapio() {
return (
<main>
<h1>Cardápio</h1>


<div className="card-grid">
<div className="card">
<img src="https://images.unsplash.com/photo-1606756790138-197eb1a7a1c9" />
<div className="card-body">
<h3>Macarronada</h3>
<p className="price">R$ 24,90</p>
</div>
</div>


<div className="card">
<img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141" />
<div className="card-body">
<h3>Hambúrguer Artesanal</h3>
<p className="price">R$ 32,00</p>
</div>
</div>


<div className="card">
<img src="https://images.unsplash.com/photo-1546069901-eacef0df6022" />
<div className="card-body">
<h3>Salada Fresca</h3>
<p className="price">R$ 18,90</p>
</div>
</div>
</div>
</main>
);
}