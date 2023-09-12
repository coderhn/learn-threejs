import * as Three from "three";

export function init() {
  // 1、创建一个场景
  const scene = new Three.Scene();

  // 2、创建一个相机[透视相机]
  const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // 3、创建一个渲染器（1.创建实例，2.将渲染器附加到页面，3.设置渲染区域的大小，4。清除画面，5.渲染场景）
  const renderer = new Three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(new Three.Color(0x000000));

  // 4、创建一个坐标
  const axes = new Three.AxesHelper(20);
  scene.add(axes);

  // 4、创建一个长方形
  const planeGeometry = new Three.PlaneGeometry(60, 20, 10, 10);
  const planeMaterial = new Three.MeshBasicMaterial({ color: 0xaaaaaa });
  const plan = new Three.Mesh(planeGeometry, planeMaterial);
  plan.rotation.x = -0.5 * Math.PI;
  plan.position.set(15, -10, 0);
  scene.add(plan);

  // 5、创建一个立方体
  const cubeGeometry = new Three.BoxGeometry(4, 4, 4);
  const cubeMaterial = new Three.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
  const cube = new Three.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(10, 4, 0);
  scene.add(cube);

  // 6、创建一个球体
  const sphereGeometry = new Three.SphereGeometry(4, 20, 20);
  const sphereMaterial = new Three.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
  const sphere = new Three.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(2,-2,-2)
  scene.add(sphere);

  // 7、设置相机在场景中的位置
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}
