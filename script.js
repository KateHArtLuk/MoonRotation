// на старте запускаем LUME
LUME.defineElements();

// вращаем планету
earth.rotation = (x, y, z, t) => [x, t * 0.01, z];
// и немного медленнее — вращаем облака вокруг планеты
clouds.rotation = (x, y, z, t) => [x, -t * 0.02, z];

// вращаем Меркурий
mercury.rotation = (x, y, z, t) => [t * 0.01, x, z];

// получаем текущее время
let lastTime = performance.now();
// сдвиг по времени, на старте равен нулю
let dt = 0;

// вращаем Луну
moonRotator.rotation = (x, y, z, time) => {
	// получаем разницу во времени
	dt = time - lastTime;
	// делаем старое время текущим
	lastTime = time;
	// возвращаем новые координаты Луны
	return [x + dt * 0.01, y, z ];
};