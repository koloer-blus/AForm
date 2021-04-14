/** 居中 */
const center = {
  /** flex垂直水平居中 */
  flex: {
    display: 'flex',
    justifyContent: 'flex',
    alignItems: 'flex',
  },
  /** flex水平居中 */
  flexHorizontal: {
    display: 'flex',
    justifyContent: 'flex',
  },
  /** flex垂直居中 */
  flexVertically: {
    display: 'flex',
    alignItems: 'flex',
  },
  /** transform垂直水平居中
   * @see {请注意该项父元素定位}
   */
  transform: {
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

module.exports = center;
