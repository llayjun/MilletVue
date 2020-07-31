import Vue from 'vue'
import {
    Button,
    Skeleton,
    Swipe,
    SwipeItem,
    Lazyload,
    Grid,
    GridItem,
    List,
    Image as VanImage,
    TreeSelect,
    Search,
    Toast,
    Sticky,
    Cell,
    Dialog,
    Notify,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Tag,
    Divider,
    ActionSheet,
    Tab,
    Tabs,
    Progress,
    PullRefresh,
} from 'vant'
Vue.use(Button);
Vue.use(Skeleton);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(List);
Vue.use(VanImage);
Vue.use(TreeSelect);
Vue.use(Search);
Vue.use(Toast);
Vue.prototype.$toast = Toast;
Vue.use(Sticky);
Vue.use(Cell);
Vue.use(Dialog);
Vue.prototype.$dialog = Dialog;
Vue.use(Notify);
Vue.prototype.$notify = Notify;
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(ActionSheet);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Progress);
Vue.use(PullRefresh);
