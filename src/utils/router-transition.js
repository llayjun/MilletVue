import '../theme/router-transition.scss'
import utils from './mutils'

const TRANSITION_DURATION = {
    enter: 350,
    leave: 330
};

export default {
    data() {
        return {
            transitionName: '',
            transitionMode: '',
            transitionDuration: TRANSITION_DURATION
        }
    },
    watch: {
        $route: {
            handler(to, from) {
                if (!utils.isMobile) {
                    this.transitionName = '';
                    this.transitionMode = '';
                    this.transitionDuration = {
                        enter: 0,
                        leave: 0
                    }
                } else {
                    this.transitionDuration = TRANSITION_DURATION;
                    if (to.params.direction === 'back') {
                        this.transitionName = 'move-left';
                        this.transitionMode = ''
                    } else if (to.params.direction === 'forward') {
                        this.transitionName = 'move-right';
                        this.transitionMode = ''
                    } else if (to.params.direction === 'replace') {
                        // replace
                        this.transitionName = '';
                        this.transitionMode = ''
                    }
                }
            },
        }
    }
}
