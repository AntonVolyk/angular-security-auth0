import {Moment} from 'moment';
import { User } from '../src/app/model/user';
import moment = require('moment');

export class Session {
    static readonly VALIDITY_MINUTS = 2;
    private validUntil: Moment;

    constructor(sessionId: string, user: User) {
        this.validUntil = moment().add(Session.VALIDITY_MINUTS, 'minutes');
    }

    isValid() {
        return moment().diff(this.validUntil, 'minutes') <= 0;
    }

}