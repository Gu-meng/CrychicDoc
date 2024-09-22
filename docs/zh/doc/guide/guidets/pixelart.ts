import type { NavData } from '../../../../../.vitepress/utils/type'

export const NAV_DATA: NavData[] = [
    {
        title: "工具",
        items: [
            {
                title: "Aseprite",
                badge: {
                    text: "推荐",
                    type: "tip"
                },
                link: "https://community.aseprite.org/",
                icon: "https://community.aseprite.org/uploads/default/optimized/1X/4c44ae432b7068d5c249db3aebb4d64d0a71324a_2_32x32.png"
            },
            {
                title: "BlockBench",
                link: "https://www.blockbench.net/",
                icon: "https://www.blockbench.net/favicon.svg"
            },
            {
                title: "PhotoShop",
                link: "https://www.zhihu.com/tardis/zm/art/461228990?source_id=1005/",
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#001e36" d="M22.667 1.6h82.666C117.867 1.6 128 11.733 128 24.267v79.466c0 12.534-10.133 22.667-22.667 22.667H22.667C10.133 126.4 0 116.267 0 103.733V24.267C0 11.733 10.133 1.6 22.667 1.6"/><path fill="#31a8ff" d="M45.867 33.333c-1.6 0-3.2 0-4.853.054c-1.654.053-3.201.053-4.641.107c-1.44.053-2.773.053-4.053.106c-1.227.053-2.08.053-2.987.053c-.373 0-.533.213-.533.587v54.88c0 .48.213.694.64.694h10.347c.373-.054.64-.374.586-.747v-17.12c1.013 0 1.76 0 2.294.053c.533.053 1.386.053 2.666.053c4.374 0 8.374-.48 12-1.813c3.467-1.28 6.454-3.52 8.587-6.507q3.2-4.48 3.2-11.36c0-2.4-.426-4.693-1.226-6.933A17 17 0 0 0 64 39.36a19.05 19.05 0 0 0-7.147-4.374c-2.987-1.12-6.613-1.653-10.986-1.653m1.19 10.505c1.9.036 3.75.368 5.476 1.068c1.547.587 2.827 1.654 3.734 3.04a8.8 8.8 0 0 1 1.227 4.748c0 2.346-.534 4.16-1.654 5.493c-1.174 1.333-2.667 2.347-4.373 2.827c-1.974.64-4.054.959-6.134.959h-2.827c-.64 0-1.332-.053-2.079-.106v-17.92c.373-.054 1.12-.107 2.187-.053c1.013-.054 2.239-.054 3.626-.054q.41-.01.817-.002m44.73 2.723c-3.787 0-6.934.586-9.44 1.866c-2.293 1.067-4.267 2.773-5.6 4.906c-1.173 1.974-1.814 4.16-1.814 6.454a11.45 11.45 0 0 0 1.227 5.44a13.8 13.8 0 0 0 4.054 4.533a32.6 32.6 0 0 0 7.573 3.84c2.613 1.013 4.373 1.813 5.227 2.506c.853.694 1.28 1.387 1.28 2.134c0 .96-.587 1.867-1.44 2.24c-.96.48-2.4.747-4.427.747c-2.133 0-4.267-.267-6.294-.8a22.8 22.8 0 0 1-6.613-2.613c-.16-.107-.32-.16-.48-.053c-.16.106-.213.319-.213.479v9.28c-.053.427.213.8.587 1.013a21.5 21.5 0 0 0 5.44 1.707c2.4.48 4.799.693 7.252.693c3.84 0 7.041-.586 9.654-1.706c2.4-.96 4.48-2.613 5.973-4.747a12.4 12.4 0 0 0 2.08-7.093a11.5 11.5 0 0 0-1.226-5.493c-1.014-1.814-2.454-3.307-4.214-4.427a38.6 38.6 0 0 0-8.213-3.894a49 49 0 0 1-3.787-1.76c-.693-.373-1.333-.853-1.813-1.44c-.32-.427-.533-.906-.533-1.386s.16-1.013.426-1.44c.374-.533.96-.907 1.653-1.067c1.014-.266 2.134-.427 3.2-.374c2.027 0 4 .267 5.974.694c1.814.373 3.52.96 5.12 1.814c.213.106.48.106.96 0a.66.66 0 0 0 .267-.534v-8.693c0-.214-.054-.427-.107-.64c-.107-.213-.32-.427-.533-.48A18.8 18.8 0 0 0 98.4 47.04a46 46 0 0 0-6.613-.48z"/></svg>'
                }
            },
            {
                title: "Pixelover",
                badge: {
                    type: "warning",
                    text: "付费"
                },
                link: "https://deakcor.itch.io/pixelover/",
                icon: "https://img.itch.zone/aW1nLzQ4NDkxMzYucG5n/32x32%23/xzPqxt.png"
            },
            {
                title: "Palette knife",
                badge: {
                    type: "info",
                    text: "可选付费"
                },
                link: "https://zingot.itch.io/palette-knife/",
                icon: "https://img.itch.zone/aW1hZ2UvNTQxMjE4LzQ1MTEyOTYucG5n/original/vKpGrU.png"
            },
            {
                title: "Pixelbasher",
                badge: {
                    type: "warning",
                    text: "付费"
                },
                link: "https://pixelbasher.dev/",
                icon: "https://www.pixilart.com/favicon.ico"
            },
            {
                title: "Pixel Composer",
                badge: {
                    type: "warning",
                    text: "付费"
                },
                link: "https://pixelbasher.dev/",
                icon: "https://pixel-composer.com/src/banner.png"
            },
        ]
    },
    {
        title: "学习",
        items: [
            {
                title: "Pixel Gif",
                link: "http://pixelgif.cn/",
                icon: "http://pixelgif.cn/favicon.ico"
            },
            {
                title: "BlockBench",
                link: "https://www.blockbench.net/",
                icon: "https://www.blockbench.net/favicon.svg"
            },
            {
                title: "Aseprite",
                link: "https://community.aseprite.org/",
                icon: "https://community.aseprite.org/uploads/default/optimized/1X/4c44ae432b7068d5c249db3aebb4d64d0a71324a_2_32x32.png"
            },
            {
                title: "Pixilart",
                link: "https://www.pixilart.com/tutorials/",
                icon: "https://www.pixilart.com/favicon.ico"
            },
            {
                title: "Lospec",
                link: "https://lospec.com/pixel-art-tutorials/",
                icon: "https://lospec.com/favicon.ico"
            },
        ]
    },
    {
        title: "调色",
        items: [
            {
                title: "Lospec",
                link: "https://lospec.com/",
                icon: "https://lospec.com/favicon.ico"
            },
            {
                title: "Adobe Color",
                link: "https://color.adobe.com/zh/",
                icon: "https://color.adobe.com/favicon.ico"
            },
            {
                title: "Color Hunt",
                link: "https://snippet-generator.app/",
                icon: "https://colorhunt.co/img/colorhunt-favicon.svg"
            },
            {
                title: "Happy Hues",
                link: "https://www.happyhues.co/",
                icon: "https://cdn.prod.website-files.com/5dd40aa8049df8748c72d0ee/5dd9b94105da589ba59c4907_happy-hues-fav.png"
            },
            {
                title: "Nipponcolors",
                link: "https://nipponcolors.com/",
                icon: "https://nipponcolors.com/favicon.ico"
            },
        ]
    }
]