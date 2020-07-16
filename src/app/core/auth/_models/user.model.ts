import { House } from './house.model';
import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';

export class User extends BaseModel {
    /**  
	 * Estate
	 */ 
	idNumber: number;
	password: string;
	firstname: string;
	lastname: string;
	email: string;
	birthdate: string;
	addressLine: string;
	phone: string;
	photo: string;
	accessToken: string;
	refreshToken: string;
	roles: number[];
	house: House;

    id: number;
    username: string;
    pic: string;
    fullname: string;
    occupation: string;
	companyName: string;
    address: Address;
    socialNetworks: SocialNetworks;

    clear(): void {
        /** 
         * Estate
         */ 
        this.idNumber = undefined;
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.birthdate = '';
        this.addressLine = '';
        this.phone = '';
        this.photo = './assets/media/users/default.jpg';
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
        this.roles = [];
        this.house = new House();
        this.house.clear();

        this.id = undefined;
        this.username = '';
        this.fullname = '';
        this.pic = './assets/media/users/default.jpg';
        this.occupation = '';
        this.companyName = '';
        this.address = new Address();
        this.address.clear();
        this.socialNetworks = new SocialNetworks();
        this.socialNetworks.clear();
    }
}
