/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ArrowButton } from "../components/common/ArrowButton";
import { ArrowIcon } from "../components/common/Icon";
import { OutlineButton } from "../components/common/OutlineButton";
import { Card } from "../components/magazine/Card";

const BranchSvg: React.FC = (props) => (
  <svg
    width="227"
    height="468"
    viewBox="0 0 227 468"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M169.5 231S119 241.5 119 291M119 291v71"
      stroke="#875F2F"
      strokeWidth="4"
    />
    <circle cx="119" cy="291" r="7" fill="#FF9B21" />
    <circle cx="119" cy="363" r="7" fill="#FF9B21" />
    <rect y="352" width="102" height="22" rx="4" fill="#333" />
    <path
      d="M11.124 359.788a1.967 1.967 0 00-.42-.144 2.004 2.004 0 00-.552-.072c-.216-.008-.38.04-.492.144a.748.748 0 00-.204.384 8.445 8.445 0 00-.048.336 7.213 7.213 0 00-.012.444v.828h1.848c.096 0 .144.048.144.144v.936a.15.15 0 01-.048.108.13.13 0 01-.096.036H9.396v4.524c0 .096-.048.144-.144.144h-.984c-.096 0-.144-.048-.144-.144v-4.524H6.78a.176.176 0 01-.108-.036.176.176 0 01-.036-.108v-.936a.13.13 0 01.036-.096.15.15 0 01.108-.048h1.332v-.744c0-.384.024-.732.072-1.044.056-.312.156-.588.3-.828.128-.2.308-.364.54-.492.24-.136.576-.204 1.008-.204.2 0 .404.02.612.06.216.04.4.096.552.168.056.032.084.088.084.168l-.048.816c0 .136-.036.196-.108.18zm6.264 5.088c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168zm7.272 5.172a.298.298 0 01-.108-.012c-.008-.008-.012-.036-.012-.084v-.552c-.192.28-.432.488-.72.624a1.94 1.94 0 01-.876.216c-.232 0-.48-.044-.744-.132a1.728 1.728 0 01-.66-.372 1.78 1.78 0 01-.444-.6 2.098 2.098 0 01-.156-.84c0-.344.068-.656.204-.936.144-.288.36-.528.648-.72a3.008 3.008 0 011.044-.42c.416-.096.944-.144 1.584-.144 0-.144-.016-.276-.048-.396a1.002 1.002 0 00-.144-.36.812.812 0 00-.312-.276.89.89 0 00-.48-.12c-.256 0-.524.048-.804.144a3.448 3.448 0 00-.768.384c-.12.08-.204.116-.252.108-.04-.008-.06-.052-.06-.132v-.936a.506.506 0 00-.012-.084c0-.048.016-.084.048-.108a.595.595 0 01.156-.108 3.93 3.93 0 01.792-.336c.288-.088.58-.132.876-.132.768 0 1.34.196 1.716.588.384.384.576.94.576 1.668V366.832c.008.224.024.424.048.6.008.112-.036.168-.132.168h-.96zm-2.436-1.836c0 .28.084.492.252.636a.843.843 0 00.54.204c.424 0 .772-.164 1.044-.492.272-.336.408-.74.408-1.212v-.132c-.856 0-1.444.088-1.764.264-.32.168-.48.412-.48.732zm9.504 1.704c-.296.104-.596.18-.9.228a3.9 3.9 0 01-.756.06c-.416 0-.748-.072-.996-.216-.248-.136-.42-.296-.516-.48a1.865 1.865 0 01-.204-.732c-.024-.28-.036-.66-.036-1.14v-2.268h-1.32a.176.176 0 01-.108-.036.176.176 0 01-.036-.108v-.948a.13.13 0 01.036-.096.15.15 0 01.108-.048h1.32v-1.74c0-.04.016-.072.048-.096a.15.15 0 01.108-.048h.972c.048 0 .084.016.108.048a.114.114 0 01.048.096v1.74h2.016c.04 0 .072.016.096.048a.114.114 0 01.048.096v.948a.15.15 0 01-.048.108.13.13 0 01-.096.036h-2.016v2.34c0 .52.012.852.036.996.016.152.088.244.216.276a2.937 2.937 0 001.116-.012c.2-.04.396-.092.588-.156.04-.016.068-.016.084 0 .016.008.032.044.048.108l.096.852c.008.056-.012.104-.06.144zm4.896.132a.16.16 0 01-.096-.036c-.024-.016-.036-.044-.036-.084v-.492a1.57 1.57 0 01-.588.6 1.584 1.584 0 01-.816.204c-.6 0-1.096-.228-1.488-.684-.384-.456-.576-1.108-.576-1.956V361.6c0-.04.012-.076.036-.108.032-.04.064-.06.096-.06h1.02c.032 0 .06.02.084.06.032.04.048.08.048.12v3.348c0 .6.084 1.024.252 1.272.168.248.392.372.672.372.344 0 .628-.164.852-.492.224-.328.336-.816.336-1.464V361.6c0-.04.012-.076.036-.108a.148.148 0 01.12-.06h.996c.032 0 .06.024.084.072.032.04.048.08.048.12v4.428c0 .248.004.492.012.732s.012.46.012.66c0 .104-.044.156-.132.156h-.972zm2.436 0a.15.15 0 01-.108-.048c-.024-.024-.036-.06-.036-.108v-.936a.13.13 0 01.036-.096.15.15 0 01.108-.048h.756V362.632h-.984a.176.176 0 01-.108-.036.194.194 0 01-.036-.12v-.9a.13.13 0 01.036-.096.15.15 0 01.108-.048h1.968a.08.08 0 01.072.036.08.08 0 01.036.072v1.02c.08-.168.164-.312.252-.432.096-.128.196-.24.3-.336.112-.104.236-.196.372-.276a2.19 2.19 0 01.624-.228c.344-.056.676-.048.996.024.328.072.6.196.816.372.04.04.056.076.048.108l-.024.096-.396.816a.146.146 0 01-.084.096c-.032.016-.076.008-.132-.024a1.92 1.92 0 00-.612-.216 1.83 1.83 0 00-.66 0 1.395 1.395 0 00-.888.54c-.216.288-.348.58-.396.876a6.608 6.608 0 00-.072 1.044v1.344h1.248c.04 0 .072.016.096.048a.114.114 0 01.048.096v.936c0 .104-.048.156-.144.156h-3.24zm10.704-2.724c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168zm4.824 5.7h-.864a.31.31 0 01-.204-.06c-.04-.032-.044-.096-.012-.192l3.108-9.084c.032-.088.096-.132.192-.132h.948c.184 0 .252.08.204.24l-3.096 9.06c-.032.072-.072.116-.12.132a.3.3 0 01-.156.036zm8.448-.528a.298.298 0 01-.108-.012c-.008-.008-.012-.036-.012-.084v-.552c-.192.28-.432.488-.72.624a1.94 1.94 0 01-.876.216c-.232 0-.48-.044-.744-.132a1.728 1.728 0 01-.66-.372 1.78 1.78 0 01-.444-.6 2.098 2.098 0 01-.156-.84c0-.344.068-.656.204-.936.144-.288.36-.528.648-.72a3.008 3.008 0 011.044-.42c.416-.096.944-.144 1.584-.144 0-.144-.016-.276-.048-.396a1.002 1.002 0 00-.144-.36.812.812 0 00-.312-.276.89.89 0 00-.48-.12c-.256 0-.524.048-.804.144a3.448 3.448 0 00-.768.384c-.12.08-.204.116-.252.108-.04-.008-.06-.052-.06-.132v-.936a.506.506 0 00-.012-.084c0-.048.016-.084.048-.108a.595.595 0 01.156-.108 3.93 3.93 0 01.792-.336c.288-.088.58-.132.876-.132.768 0 1.34.196 1.716.588.384.384.576.94.576 1.668V366.832c.008.224.024.424.048.6.008.112-.036.168-.132.168h-.96zm-2.436-1.836c0 .28.084.492.252.636a.843.843 0 00.54.204c.424 0 .772-.164 1.044-.492.272-.336.408-.74.408-1.212v-.132c-.856 0-1.444.088-1.764.264-.32.168-.48.412-.48.732zm7.884 1.836c-.088 0-.152-.02-.192-.06a.283.283 0 01-.06-.12l-.42-3-.06-.66-.048.66-.42 3c-.032.08-.064.128-.096.144-.032.024-.092.036-.18.036h-.84a.211.211 0 01-.156-.06.366.366 0 01-.084-.12l-.9-5.856c-.008-.04-.004-.072.012-.096.016-.024.092-.036.228-.036h.648c.112 0 .18.012.204.036a.154.154 0 01.06.096l.372 3.204.072.984.084-.984.396-2.724a.154.154 0 01.06-.096.388.388 0 01.192-.036h.804c.144 0 .224.044.24.132l.396 2.724.096.984.072-.984.36-3.204a.151.151 0 01.06-.084c.032-.032.088-.048.168-.048h.684c.12 0 .192.012.216.036.024.024.032.056.024.096l-.888 5.856a.517.517 0 01-.084.144c-.024.024-.08.036-.168.036h-.852zm7.656-2.724c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168zm7.308 4.92c-.408.28-.92.424-1.536.432-.16 0-.328-.008-.504-.024a7.858 7.858 0 01-.48-.06 3.083 3.083 0 01-.444-.084 1.821 1.821 0 01-.324-.096.297.297 0 01-.108-.06c-.032-.032-.044-.076-.036-.132l.072-.804c.008-.072.02-.116.036-.132.016-.016.068-.012.156.012.28.08.556.14.828.18.28.032.532.048.756.048.352 0 .612-.06.78-.18a.606.606 0 00.264-.516.593.593 0 00-.132-.348c-.088-.128-.236-.256-.444-.384-.216-.128-.44-.256-.672-.384-.232-.136-.46-.264-.684-.384a1.93 1.93 0 01-.648-.6c-.168-.256-.252-.504-.252-.744a1.771 1.771 0 01.66-1.392c.2-.16.428-.276.684-.348.264-.072.54-.108.828-.108a4.704 4.704 0 01.948.096c.16.024.3.056.42.096.128.032.224.068.288.108.04.016.06.036.06.06.008.016.008.044 0 .084l-.072.792c-.008.08-.032.132-.072.156-.04.016-.096.008-.168-.024a5.027 5.027 0 00-.516-.156 2.95 2.95 0 00-.444-.06 3.206 3.206 0 00-.372-.024c-.328 0-.56.06-.696.18-.136.12-.204.252-.204.396 0 .136.076.276.228.42.152.136.344.264.576.384.256.128.488.256.696.384.208.12.364.22.468.3.288.2.504.42.648.66.144.232.216.476.216.732 0 .624-.268 1.132-.804 1.524zm6.564-.588a2.317 2.317 0 01-.828.756 2.112 2.112 0 01-1.056.264c-.4 0-.756-.084-1.068-.252a2.392 2.392 0 01-.78-.696 3.356 3.356 0 01-.468-1.044 4.898 4.898 0 01-.156-1.26c0-.448.052-.868.156-1.26.104-.392.26-.736.468-1.032.216-.296.476-.528.78-.696.304-.168.66-.252 1.068-.252.4 0 .752.084 1.056.252.312.168.572.4.78.696.216.296.376.64.48 1.032.104.392.156.812.156 1.26 0 .44-.052.852-.156 1.236a3.438 3.438 0 01-.432.996zM81 362.464a.797.797 0 00-.528.18c-.144.12-.264.28-.36.48-.088.192-.16.412-.216.66a3.907 3.907 0 000 1.5c.056.24.128.46.216.66.096.2.216.36.36.48s.32.18.528.18c.2 0 .372-.06.516-.18.152-.12.272-.28.36-.48.096-.2.168-.42.216-.66.056-.248.084-.5.084-.756a3.21 3.21 0 00-.084-.732 2.558 2.558 0 00-.216-.66c-.088-.2-.208-.36-.36-.48a.75.75 0 00-.516-.192zm7.572 5.136c-.024 0-.044-.02-.06-.06a.238.238 0 01-.024-.108v-3.684c0-.4-.028-.708-.084-.924-.056-.224-.148-.336-.276-.336-.08 0-.152.044-.216.132-.064.088-.116.232-.156.432-.032.2-.048.412-.048.636v3.636c0 .104-.024.156-.072.156h-.96c-.024 0-.044-.02-.06-.06a.238.238 0 01-.024-.108v-3.564c-.008-.84-.136-1.26-.384-1.26-.144 0-.248.136-.312.408-.056.272-.084.644-.084 1.116v3.432c0 .104-.028.156-.084.156h-.996c-.016 0-.032-.02-.048-.06a.238.238 0 01-.024-.108v-4.308c0-.304-.004-.596-.012-.876 0-.28-.004-.5-.012-.66-.008-.104.024-.156.096-.156h.888c.048 0 .072.032.072.096l-.012.48c.048-.224.14-.4.276-.528a.625.625 0 01.432-.192c.216 0 .408.096.576.288.176.192.284.476.324.852.104-.384.248-.668.432-.852a.857.857 0 01.636-.288c.368 0 .672.204.912.612.248.4.372.964.372 1.692v3.852c0 .04-.008.076-.024.108s-.036.048-.06.048h-.984zm6.816-2.724c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168z"
      fill="#fff"
    />
    <path d="M108 363l-7.5 4.33v-8.66L108 363z" fill="#333" />
    <path
      d="M220.5 137S170 147.5 170 197M220.5 400S170 389.5 170 340M170 197v215"
      stroke="#419179"
      strokeWidth="4"
    />
    <circle cx="170" cy="197" r="7" fill="#3ADCB5" />
    <circle cx="170" cy="231" r="7" fill="#3ADCB5" />
    <circle cx="170" cy="340" r="7" fill="#3ADCB5" />
    <circle cx="170" cy="412" r="7" fill="#3ADCB5" />
    <rect x="123" y="401" width="30" height="22" rx="4" fill="#333" />
    <path
      d="M131.616 416.744c-.368 0-.692-.08-.972-.24a2.172 2.172 0 01-.708-.648 3.369 3.369 0 01-.444-1.044 5.425 5.425 0 01-.156-1.32c0-.352.052-.74.156-1.164.112-.432.264-.8.456-1.104.2-.304.436-.536.708-.696.28-.168.6-.252.96-.252.264 0 .512.064.744.192.24.12.448.304.624.552v-3.348c0-.064.008-.104.024-.12s.048-.024.096-.024h1.032c.088 0 .132.048.132.144v8.748c0 .12-.056.18-.168.18h-.96c-.104 0-.156-.06-.156-.18v-.468c-.136.24-.332.432-.588.576a1.575 1.575 0 01-.78.216zm.276-5.244c-.384 0-.68.2-.888.6-.208.4-.312.864-.312 1.392 0 .568.108 1.052.324 1.452.216.392.508.588.876.588a.75.75 0 00.444-.156c.144-.104.268-.252.372-.444.112-.192.196-.42.252-.684.056-.272.084-.524.084-.756 0-.568-.104-1.04-.312-1.416-.2-.384-.48-.576-.84-.576zm8.496 2.376c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168zm6.492 5.172h-1.032a.196.196 0 01-.108-.024c-.016-.008-.032-.036-.048-.084l-1.884-5.928c-.016-.04-.016-.072 0-.096.016-.024.068-.036.156-.036h.984a.17.17 0 01.096.024c.024.008.044.032.06.072l.9 3.036.36 1.356.348-1.356.9-3.036c.016-.04.036-.064.06-.072a.238.238 0 01.108-.024h.996c.088 0 .14.012.156.036.016.024.016.056 0 .096l-1.908 5.928c-.016.048-.032.076-.048.084-.016.016-.048.024-.096.024z"
      fill="#fff"
    />
    <path d="M159 412l-7.5 4.33v-8.66L159 412z" fill="#333" />
    <path stroke="#504F5B" strokeWidth="4" d="M220 0v457" />
    <circle cx="220" cy="197" r="7" fill="#949494" />
    <circle cx="220" cy="137" r="7" fill="#949494" />
    <circle cx="220" cy="254" r="7" fill="#949494" />
    <circle cx="220" cy="311" r="7" fill="#949494" />
    <circle cx="220" cy="400" r="7" fill="#949494" />
    <circle cx="220" cy="457" r="7" fill="#949494" />
    <rect x="155" y="446" width="48" height="22" rx="4" fill="#333" />
    <path
      d="M165.572 461.6c-.024 0-.044-.02-.06-.06a.238.238 0 01-.024-.108v-3.684c0-.4-.028-.708-.084-.924-.056-.224-.148-.336-.276-.336-.08 0-.152.044-.216.132-.064.088-.116.232-.156.432-.032.2-.048.412-.048.636v3.636c0 .104-.024.156-.072.156h-.96c-.024 0-.044-.02-.06-.06a.238.238 0 01-.024-.108v-3.564c-.008-.84-.136-1.26-.384-1.26-.144 0-.248.136-.312.408-.056.272-.084.644-.084 1.116v3.432c0 .104-.028.156-.084.156h-.996c-.016 0-.032-.02-.048-.06a.238.238 0 01-.024-.108v-4.308c0-.304-.004-.596-.012-.876 0-.28-.004-.5-.012-.66-.008-.104.024-.156.096-.156h.888c.048 0 .072.032.072.096l-.012.48c.048-.224.14-.4.276-.528a.625.625 0 01.432-.192c.216 0 .408.096.576.288.176.192.284.476.324.852.104-.384.248-.668.432-.852a.857.857 0 01.636-.288c.368 0 .672.204.912.612.248.4.372.964.372 1.692v3.852c0 .04-.008.076-.024.108s-.036.048-.06.048h-.984zm5.712 0a.298.298 0 01-.108-.012c-.008-.008-.012-.036-.012-.084v-.552c-.192.28-.432.488-.72.624a1.94 1.94 0 01-.876.216c-.232 0-.48-.044-.744-.132a1.728 1.728 0 01-.66-.372 1.78 1.78 0 01-.444-.6 2.098 2.098 0 01-.156-.84c0-.344.068-.656.204-.936.144-.288.36-.528.648-.72a3.008 3.008 0 011.044-.42c.416-.096.944-.144 1.584-.144 0-.144-.016-.276-.048-.396a1.002 1.002 0 00-.144-.36.812.812 0 00-.312-.276.89.89 0 00-.48-.12c-.256 0-.524.048-.804.144a3.448 3.448 0 00-.768.384c-.12.08-.204.116-.252.108-.04-.008-.06-.052-.06-.132v-.936a.506.506 0 00-.012-.084c0-.048.016-.084.048-.108a.595.595 0 01.156-.108 3.93 3.93 0 01.792-.336c.288-.088.58-.132.876-.132.768 0 1.34.196 1.716.588.384.384.576.94.576 1.668V460.832c.008.224.024.424.048.6.008.112-.036.168-.132.168h-.96zm-2.436-1.836c0 .28.084.492.252.636a.843.843 0 00.54.204c.424 0 .772-.164 1.044-.492.272-.336.408-.74.408-1.212v-.132c-.856 0-1.444.088-1.764.264-.32.168-.48.412-.48.732zm8.472 1.584c-.408.28-.92.424-1.536.432-.16 0-.328-.008-.504-.024a7.858 7.858 0 01-.48-.06 3.083 3.083 0 01-.444-.084 1.821 1.821 0 01-.324-.096.297.297 0 01-.108-.06c-.032-.032-.044-.076-.036-.132l.072-.804c.008-.072.02-.116.036-.132.016-.016.068-.012.156.012.28.08.556.14.828.18.28.032.532.048.756.048.352 0 .612-.06.78-.18a.606.606 0 00.264-.516.593.593 0 00-.132-.348c-.088-.128-.236-.256-.444-.384-.216-.128-.44-.256-.672-.384-.232-.136-.46-.264-.684-.384a1.93 1.93 0 01-.648-.6c-.168-.256-.252-.504-.252-.744a1.771 1.771 0 01.66-1.392c.2-.16.428-.276.684-.348.264-.072.54-.108.828-.108a4.704 4.704 0 01.948.096c.16.024.3.056.42.096.128.032.224.068.288.108.04.016.06.036.06.06.008.016.008.044 0 .084l-.072.792c-.008.08-.032.132-.072.156-.04.016-.096.008-.168-.024a5.027 5.027 0 00-.516-.156 2.95 2.95 0 00-.444-.06 3.206 3.206 0 00-.372-.024c-.328 0-.56.06-.696.18-.136.12-.204.252-.204.396 0 .136.076.276.228.42.152.136.344.264.576.384.256.128.488.256.696.384.208.12.364.22.468.3.288.2.504.42.648.66.144.232.216.476.216.732 0 .624-.268 1.132-.804 1.524zm7.032.12c-.296.104-.596.18-.9.228a3.9 3.9 0 01-.756.06c-.416 0-.748-.072-.996-.216-.248-.136-.42-.296-.516-.48a1.865 1.865 0 01-.204-.732c-.024-.28-.036-.66-.036-1.14v-2.268h-1.32a.176.176 0 01-.108-.036.176.176 0 01-.036-.108v-.948a.13.13 0 01.036-.096.15.15 0 01.108-.048h1.32v-1.74c0-.04.016-.072.048-.096a.15.15 0 01.108-.048h.972c.048 0 .084.016.108.048a.114.114 0 01.048.096v1.74h2.016c.04 0 .072.016.096.048a.114.114 0 01.048.096v.948a.15.15 0 01-.048.108.13.13 0 01-.096.036h-2.016v2.34c0 .52.012.852.036.996.016.152.088.244.216.276a2.937 2.937 0 001.116-.012c.2-.04.396-.092.588-.156.04-.016.068-.016.084 0 .016.008.032.044.048.108l.096.852c.008.056-.012.104-.06.144zm6.036-2.592c0 .064-.016.112-.048.144-.024.024-.06.036-.108.036h-3.288c.008.424.116.788.324 1.092.216.296.56.444 1.032.444.288 0 .54-.032.756-.096a2.46 2.46 0 00.684-.36c.064-.032.1-.028.108.012.016.04.024.088.024.144v.852c0 .072-.012.124-.036.156a.424.424 0 01-.12.12c-.208.112-.42.2-.636.264a2.693 2.693 0 01-.78.096c-.912 0-1.592-.292-2.04-.876-.448-.584-.672-1.356-.672-2.316 0-.408.048-.804.144-1.188a3.47 3.47 0 01.444-1.056c.208-.312.468-.568.78-.768.312-.2.672-.3 1.08-.3.432 0 .796.092 1.092.276.304.184.548.428.732.732.192.296.328.636.408 1.02.088.384.132.8.132 1.248 0 .056-.004.12-.012.192v.132zm-2.376-2.448a.848.848 0 00-.516.168 1.11 1.11 0 00-.348.432c-.08.176-.136.34-.168.492-.024.144-.036.26-.036.348h2.148c0-.088-.016-.204-.048-.348a1.71 1.71 0 00-.168-.492.985.985 0 00-.348-.432.848.848 0 00-.516-.168zm3.672 5.172a.15.15 0 01-.108-.048c-.024-.024-.036-.06-.036-.108v-.936a.13.13 0 01.036-.096.15.15 0 01.108-.048h.756V456.632h-.984a.176.176 0 01-.108-.036.194.194 0 01-.036-.12v-.9a.13.13 0 01.036-.096.15.15 0 01.108-.048h1.968a.08.08 0 01.072.036.08.08 0 01.036.072v1.02c.08-.168.164-.312.252-.432.096-.128.196-.24.3-.336.112-.104.236-.196.372-.276a2.19 2.19 0 01.624-.228c.344-.056.676-.048.996.024.328.072.6.196.816.372.04.04.056.076.048.108l-.024.096-.396.816a.146.146 0 01-.084.096c-.032.016-.076.008-.132-.024a1.92 1.92 0 00-.612-.216 1.83 1.83 0 00-.66 0 1.395 1.395 0 00-.888.54c-.216.288-.348.58-.396.876a6.608 6.608 0 00-.072 1.044v1.344h1.248c.04 0 .072.016.096.048a.114.114 0 01.048.096v.936c0 .104-.048.156-.144.156h-3.24z"
      fill="#fff"
    />
    <path d="M209 457l-7.5 4.33v-8.66L209 457z" fill="#333" />
  </svg>
);

export const HomeContainer: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          background: #f7f8fa;
        `}
      >
        <div
          css={css`
            display: flex;
            padding-top: 57px;
            padding-bottom: 85px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 50px;
            `}
          >
            <div
              css={css`
                padding-top: 51px;
                padding-bottom: 23px;
                font-style: normal;
                font-weight: bold;
                font-size: 48px;
                line-height: 60px;
                letter-spacing: -0.02em;

                color: #242627;
              `}
            >
              <div>군 복무 중에도,</div>
              <div>개발은 계속되어야 하니까</div>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                padding-bottom: 44px;
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.02em;

                color: #000000;
              `}
            >
              <div>군 장병을 위한 종합 개발 플랫폼,</div>
              <div>CodeSquare에서 당신의 열정을 이어가세요.</div>
            </div>
            <div>
              <ArrowButton to="/register">시작하기</ArrowButton>
            </div>
          </div>
          <div
            css={css`
              margin-top: 38px;
              width: 574px;
              height: 458px;
              background-size: 574px 458px;
              background-image: url(main-1.png);
            `}
          />
          <div
            css={css`
              position: absolute;
              width: 59px;
              height: 59px;
              left: calc(50% - 59px / 2 + 154.5px);
              top: 490px;

              border-radius: 50%;
              background: #ff9b21;
              opacity: 0.2;
            `}
          />
          <div
            css={css`
              position: absolute;
              width: 94px;
              height: 94px;
              left: calc(50% - 94px / 2 + 518px);
              top: 131px;

              border-radius: 50%;
              background: #ff9b21;
              opacity: 0.2;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            padding-top: 114px;
            padding-bottom: 62px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              font-style: normal;
              font-weight: bold;
              font-size: 36px;
              line-height: 48px;
              letter-spacing: -0.02em;
              padding-right: 156px;

              color: #242627;
            `}
          >
            <div>웹 브라우저만 있다면,</div>
            <div>어디서든 문제없죠</div>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.02em;

                color: #878686;

                display: flex;
                flex-direction: column;
                padding-bottom: 30px;
              `}
            >
              <div>
                사용자마다 Linux VM이 개별 제공되고, VM에서 Visual Studio Code가
                구동됩니다.
              </div>
              <div>
                덕분에 웹 브라우저만 있으면 IDE는 물론, Linux 터미널도 사용할 수
                있죠.
              </div>
              <div>더 이상 환경에 신경쓰지 않고 개발에만 집중하세요.</div>
            </div>
            <ArrowButton to="/vm">IDE 바로가기</ArrowButton>
          </div>
        </div>
        <div
          css={css`
            position: relative;
            width: 829px;
            height: 315px;
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 129px;
              height: 129px;
              right: -19px;
              top: -65px;

              border-radius: 50%;
              background: #ff9b21;
              opacity: 0.2;
            `}
          />
          <div
            css={css`
              z-index: 3;
              position: absolute;
              width: 598px;
              height: 416.72px;
              left: 231px;
              top: 0px;
              background-size: 598px 416.72px;
              background-image: url(main-2-2.png);
              background-repeat: no-repeat;
            `}
          />
          <div
            css={css`
              z-index: 4;
              position: absolute;
              width: 304.44px;
              height: 329.22px;
              left: 0px;
              top: 0px;
              background-size: 304.44px 329.22px;
              background-image: url(main-2-1.png);
              background-repeat: no-repeat;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          background: #1d1c28;
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 87px;
            padding-bottom: 104px;
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                position: relative;
              `}
            >
              <BranchSvg
                css={css`
                  z-index: 2;
                  position: absolute;
                  left: 0;
                  top: 0;
                `}
              />
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                margin-left: 313px;
                padding-top: 124px;
              `}
            >
              <div
                css={css`
                  font-style: normal;
                  font-weight: bold;
                  font-size: 36px;
                  line-height: 48px;
                  letter-spacing: -0.02em;

                  color: #ffffff;

                  display: flex;
                  flex-direction: column;
                  padding-bottom: 24px;
                `}
              >
                <div>국방망에서 만나는</div>
                <div>Git 저장소</div>
              </div>
              <div
                css={css`
                  font-style: normal;
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 26px;
                  letter-spacing: -0.02em;

                  color: #e1e1e1;

                  display: flex;
                  flex-direction: column;
                  padding-bottom: 45px;
                `}
              >
                <div>웹메일과 SVN의 시대는 안녕.</div>
                <div>
                  이제 국방망에서도 Git의 유용한 기능을 사용할 수 있습니다.
                </div>
                <div>오픈소스로 다른 전우들과 함께 개발할 수도 있고,</div>
                <div>비공개 저장소로 Git의 장점만 누릴 수도 있죠.</div>
              </div>
              <OutlineButton
                css={css`
                  color: #ffffff;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 24px;
                  letter-spacing: -0.04em;
                  text-align: left;

                  display: flex;
                  width: 181px;
                  padding: 0;
                  border: 1px solid #ffffff;
                  box-sizing: border-box;
                  border-radius: 0px;
                `}
              >
                <a
                  href="https://git.codesquare.space/"
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 12px 17px;
                    color: inherit;
                    text-decoration: none;
                  `}
                >
                  저장소 바로가기
                  <ArrowIcon color="#ffffff" />
                </a>
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-top: 87px;
            padding-bottom: 104px;
            width: 1120px;
          `}
        >
          <div
            css={css`
              display: flex;
              padding-bottom: 60px;
            `}
          >
            <div
              css={css`
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 48px;
                letter-spacing: -0.02em;

                color: #242627;

                display: flex;
                flex-direction: column;
                padding-right: 263px;
              `}
            >
              <div>개발하다 막혀도</div>
              <div>걱정은 뚝</div>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 26px;
                  /* or 144% */
                  letter-spacing: -0.02em;

                  color: #878686;

                  display: flex;
                  flex-direction: column;
                `}
              >
                <div>열심히 개발하다 보면 많은 어려움을 마주하게 되죠.</div>
                <div
                  css={css`
                    padding-bottom: 18px;
                  `}
                >
                  하지만 CodeSquare와 함께라면 문제 없습니다.
                </div>
                <div>인터넷이 없어도 주요 레퍼런스 문서를 찾아볼 수 있고,</div>
                <div>
                  질문이 있다면 CodeSquare의 전우들에게 물어보면 되니까요.
                </div>
                <div>스킬업을 할 수 있는 멋진 블로그 글들은 덤이죠.</div>
              </div>
            </div>
          </div>
          <ArrowButton
            to="/magazine"
            css={css`
              align-self: flex-end;
              margin-bottom: 36px;
            `}
          >
            더보기
          </ArrowButton>
          <div
            css={css`
              display: flex;

              & > div:not(:last-child) {
                margin-right: 20px;
              }
            `}
          >
            <Card
              id="1"
              src="magazine-1.png"
              title="초보 개발자가 꼭 알아야 할 GitHub 협업 가이드"
              source="Luavis Dev Story"
              created_at="2020-10-16"
            />
            <Card
              id="2"
              src="magazine-3.png"
              title="WebXR Device API를 이용한 웹 AR 구현, 그 한계와 대안"
              source="NAVER D2 Hello World"
              created_at="2020-10-16"
            />
            <Card
              id="3"
              src="magazine-4.png"
              title="2020년과 이후 JavaScript의 동향 - WebAssembly"
              source="NAVER D2 Hello World"
              created_at="2020-09-02"
            />
            <Card
              id="4"
              src="magazine-5.png"
              title="TypeScript 환경에서 Redux를 프로처럼 사용하기"
              source="velopert.log"
              created_at="2020-10-16"
            />
          </div>
        </div>
      </div>
      <div
        css={css`
          background: #1d1c28;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 48px;
            text-align: center;
            letter-spacing: -0.02em;

            color: #ffffff;

            display: flex;
            flex-direction: column;
            padding-top: 114px;
            padding-bottom: 24px;
          `}
        >
          <div>CodeSquare와 함께</div>
          <div>당신의 열정을 펼쳐보세요.</div>
        </div>
        <ArrowButton
          to="/register"
          color="#ffffff"
          css={css`
            margin-bottom: 130px;
          `}
        >
          지금 시작하기
        </ArrowButton>
      </div>
    </div>
  );
};
