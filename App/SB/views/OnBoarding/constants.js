import secure from './statics/secure.png'
import share from './statics/share.png'
import sync from './statics/sync.png'

const endDate = '2019-02-05T00:00:00.001Z'
var timeRemain = 0;

var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
// clear countdown when date is reached
if (diff > 0) {
  timeRemain = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  };

  // calculate time difference between now and expected date
  if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
    timeRemain.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeRemain.years * 365.25 * 86400;
  }
  if (diff >= 86400) { // 24 * 60 * 60
    timeRemain.days = Math.floor(diff / 86400);
    diff -= timeRemain.days * 86400;
  }
  if (diff >= 3600) { // 60 * 60
    timeRemain.hours = Math.floor(diff / 3600);
    diff -= timeRemain.hours * 3600;
  }
  if (diff >= 60) {
    timeRemain.min = Math.floor(diff / 60);
    diff -= timeRemain.min * 60;
  }
  timeRemain.sec = diff;
}

export const pages = [{
  order: 0,
  title: 'Online Rights' + timeRemain.days? `\n\tLAUNCH in ${timeRemain.days} Days` : '',
  subTitle: 'Online Access to reliable storage is a basic right.',
  image: secure,
  dotColor: 'yellow'
}, {
  order: 1,
  title: 'OSS' + timeRemain.days? `\n\tLAUNCH in ${timeRemain.days} Days` : '',
  subTitle: 'Select your droid for OSS Genesis Launch.',
  image: share,
  dotColor: 'blue'
}, {
  order: 2,
  title: 'Genesis' + timeRemain.days? `\n\tLAUNCH in ${timeRemain.days} Days` : '',
  subTitle: 'Select your droid and build your World',
  image: sync,
  dotColor: 'green'
}]
