export const Crown: React.FC<{
  height?: string | number
  width?: string | number
  fill?: string
}> = ({ height, width = '1em', fill = 'var(--fg)' }) => (
  <svg width={width} height={height} viewBox="0 0 18 15" fill="none">
    <path d="M14.4375 13.4375H3.0625C2.81641 13.4375 2.625 13.6562 2.625 13.875V14.3125C2.625 14.5586 2.81641 14.75 3.0625 14.75H14.4375C14.6562 14.75 14.875 14.5586 14.875 14.3125V13.875C14.875 13.6562 14.6562 13.4375 14.4375 13.4375ZM16.1875 4.25C15.4492 4.25 14.875 4.85156 14.875 5.5625C14.875 5.78125 14.9023 5.94531 14.9844 6.10938L13.0156 7.3125C12.8516 7.39453 12.7148 7.42188 12.5508 7.42188C12.25 7.42188 11.9492 7.25781 11.7852 6.98438L9.57031 3.07422C9.87109 2.85547 10.0625 2.47266 10.0625 2.0625C10.0625 1.35156 9.46094 0.75 8.75 0.75C8.01172 0.75 7.4375 1.35156 7.4375 2.0625C7.4375 2.47266 7.62891 2.85547 7.90234 3.07422L5.6875 6.98438C5.52344 7.25781 5.22266 7.42188 4.92188 7.42188C4.75781 7.42188 4.62109 7.39453 4.48438 7.3125L2.48828 6.10938C2.57031 5.94531 2.625 5.75391 2.625 5.5625C2.625 4.85156 2.02344 4.25 1.3125 4.25C0.574219 4.25 0 4.85156 0 5.5625C0 6.30078 0.574219 6.875 1.3125 6.875C1.36719 6.875 1.44922 6.875 1.50391 6.875L3.5 12.125H14L15.9688 6.875C16.0234 6.875 16.1055 6.875 16.1875 6.875C16.8984 6.875 17.5 6.30078 17.5 5.5625C17.5 4.85156 16.8984 4.25 16.1875 4.25ZM13.0703 10.8125H4.40234L3.41797 8.1875L3.80078 8.43359C4.12891 8.625 4.53906 8.73438 4.92188 8.73438C5.71484 8.73438 6.42578 8.32422 6.80859 7.64062L8.75 4.27734L10.6641 7.64062C11.0469 8.32422 11.7578 8.73438 12.5508 8.73438C12.9609 8.73438 13.3438 8.625 13.6719 8.43359L14.0547 8.1875L13.0703 10.8125Z" fill={fill} />
  </svg>
)
