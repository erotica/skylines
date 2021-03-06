import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default Helper.extend({
  units: service(),

  speedUnitObserver: observer('units.speedUnit', function() {
    this.recompute();
  }),

  compute([value], options) {
    return this.get('units').formatSpeed(value, options);
  },
});
