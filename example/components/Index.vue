<<template>
  <div class="catalog">
    <h6 class="title">VMU</h6>
    <ul>
        <li>
          <router-link to="/toast">Toast</router-link>
        </li>
        <li>
          <router-link to="/togglepanel">TogglePanel</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.catalog {
    margin-bottom: 0.1rem;
    background-color: #fff;
    text-align: left;
}

.title {
    height: 0.8rem;
    padding-left: 0.1rem;
    background: #2b88cf;
    color: #fff;
    font-size: 0.3rem;
    font-weight: bold;
    line-height: 0.8rem;
}

.catalog li {
    height: 0.8rem;
    padding-left: 0.15rem;
    line-height: 0.8rem;
    border-bottom: 0.01rem solid #e5e5e5;
}

.catalog li a {
    color: #333;
    display: block;
}
</style>
