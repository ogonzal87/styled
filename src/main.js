import { Application } from '@splinetool/runtime';
import styled from "styled-components";
import Logo from "./logo.svg";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/eF9QYebPC-6wbzxF/scene.splinecode');


