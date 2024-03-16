import AOS from 'aos';
import { activehandler } from "./modules/tabs";
activehandler();

AOS.init({
	offset: 300,
	once: true,
});