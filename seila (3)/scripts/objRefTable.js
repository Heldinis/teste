const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{chao: 0},
	{lava: 0},
	{ourocoletadas: 0},
	{ouro: 0},
	{porta: 0},
	{blocoespecial: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{jogador: 0},
	{textoouro: 0},
	{txtvenceu: 0},
	{totalouros: 0},
	{portaaberta: 0}
];

self.InstanceType = {
	chao: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	ouro: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	blocoespecial: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	textoouro: class extends self.ITextInstance {},
	txtvenceu: class extends self.ITextInstance {}
}