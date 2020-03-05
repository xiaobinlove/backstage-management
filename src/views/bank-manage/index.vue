<template>
  <div class="app-container">
    <!--搜索 筛选-->
    <div class="filter-container">
      <el-input v-model="listQuery.bankName" placeholder="请输入企业名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" type="primary" @click="download">
        导出数据
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="Title" min-width="150px">
        <template slot-scope="{row}">
          xxx
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
  // import { fetchList } from '@/api/article'
  import { fetchBankList } from '@/api/bank-manage'
  import waves from '@/directive/waves' // waves directive
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination

  export default {
    name: 'ComplexTable',
    components: { Pagination },
    directives: { waves },
    data() {
      return {
        tableKey: 0,
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          bankName: ''
        },
      }
    },
    created() {
      this.getList()
    },
    methods: {
      download() {
        const a = document.createElement('a') // 创建a标签
        a.setAttribute('download', '')// download属性
        a.setAttribute('href', '')// href链接
        a.click()
      },
      getList() {
        this.listLoading = true
        fetchBankList(this.listQuery).then(response => {
          this.list = response.data.items
          this.total = response.data.total

          // Just to simulate the time of the request
          setTimeout(() => {
            this.listLoading = false
          }, 1.5 * 1000)
        })
      },
      handleFilter() {
        this.listQuery.pageNum = 1
        this.getList()
      },
    }
  }
</script>
