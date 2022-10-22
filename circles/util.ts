import type {HydratedDocument} from 'mongoose';
import moment from 'moment';
import type {Circle, PopulatedCircle} from './model';
import type {User} from '../user/model';

// Update this if you add a property to the Freet type!
type CircleResponse = {
  _id: string;
  self_username: string;
  circle_usernames: string[];
  circle_name: string;
};

/**
 * Encode a date as an unambiguous string
 *
 * @param {Date} date - A date object
 * @returns {string} - formatted date as string
 */
const formatDate = (date: Date): string => moment(date).format('MMMM Do YYYY, h:mm:ss a');

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Circle>} circle - A circle object
 * @returns {CircleResponse} - The freet object formatted for the frontend
 */
const constructCircleResponse = async (circle: HydratedDocument<Circle>): Promise<CircleResponse> => {
  const circleCopy: PopulatedCircle = {
    ...circle.toObject({
      versionKey: false // Cosmetics; prevents returning of __v property
    })
  };

  const self_username = await circle.populate<{user_self: User}>({
    path: 'user_self'
  }).then(m => m.user_self.username);

  const circle_usernames = await circle.populate<{users: User[]}>({
    path: 'users'
  }).then(m => m.users.map(s => s.username));

  return {
    _id: circleCopy._id.toString(),
    self_username,
    circle_usernames,
    circle_name: circleCopy.name
  };
};

export {
  constructCircleResponse
};
