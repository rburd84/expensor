function Calender() {
  return (
    <>
      <table className="calender">
        <thead>
          <tr>
            <th colSpan="8">January</th>
          </tr>
          <tr>
            <th className="table-heading">&nbsp;</th>
            <th className="table-heading">SUN</th>
            <th className="table-heading">MON</th>
            <th className="table-heading">TUE</th>
            <th className="table-heading">WED</th>
            <th className="table-heading">THU</th>
            <th className="table-heading">FRI</th>
            <th className="table-heading">SAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>W1</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <th>W2</th>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <th>W3</th>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <th>W4</th>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <th>W5</th>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Today's Date</td>
            <td colSpan={5}>{new Date().toDateString()}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
export default Calender;
