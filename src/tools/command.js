import Vue from 'vue'
import ls from 'store2'

export const inBrowser = typeof window !== 'undefined'

export const ua = () => {
    var userAgentInfo = typeof window !== 'undefined' ? navigator.userAgent : ''
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod']
    var flag = 'PC'
    for (var vv = 0; vv < Agents.length; vv++) {
        if (userAgentInfo.indexOf(Agents[vv]) > 0) {
            flag = Agents[vv]
            break
        }
    }
    return flag
}

export const ssp = path => {
    if (typeof window !== 'undefined') {
        var clientHeight = document.documentElement.clientHeight,
            scrollTop = ls.get(path)
        if (scrollTop) {
            Vue.nextTick(() => {
                if (document.body.clientHeight >= scrollTop + clientHeight) {
                    window.scrollTo(0, scrollTop)
                } else {
                    ls.remove(path)
                }
            })
        }
    }
}
