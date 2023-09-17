import { bikeModelStore } from "@render/stores/index"
import { getLocalFormattedDatetime } from "@render/utils/formatter"
import { type EmitFilterChanged, type EmitSortChanged } from "hyena-design-system"
import { Pagination } from "@render/types/bike-model-types"
import type { BikeSpec } from "hylink-bts-api-v3-client"

export const TABLE_FIELDS = {
  BIKE_MODEL: "Bike Model",
  BRAND_CUSTOMER: "Brand Customer",
  CREATED: "Created",
}

export const setBikeSpecList = async () => {
  await bikeModelStore.setBikeSpecList()
}

export const setBrandList = async () => {
  await bikeModelStore.setBrandList()
}

export const getBikeSpecList = (): BikeSpec[] => {
  return bikeModelStore.getBikeSpecList.map(data => {
    const [brand] = bikeModelStore.getBrandNameList
      .filter(brand => brand.value === data.brand_id)
      .map(brand => brand.label)
    return {
      ...data,
      [TABLE_FIELDS.BIKE_MODEL]: data.name,
      [TABLE_FIELDS.BRAND_CUSTOMER]: brand,
      [TABLE_FIELDS.CREATED]: getLocalFormattedDatetime(new Date(data.created_at)),
    }
  })
}

export const getPagination = <T>(page: number, dataList: T[]): Pagination => {
  const pageSize = 10
  const pagination = {
    page: page,
    page_size: pageSize,
    total_pages: Math.ceil(dataList.length / pageSize),
    total: dataList.length,
  }
  return pagination
}

export const getPaginationData = <T>(pagination: Pagination, dataList: T[]): T[] => {
  const result = dataList.slice(
    (pagination.page - 1) * pagination.page_size,
    pagination.page_size * pagination.page
  )
  return result
}

export const sortBikeSpecList = (dataList: BikeSpec[], sortList: EmitSortChanged["sortState"]) => {
  if (sortList.length > 0) {
    sortList.forEach(sorter => {
      dataList.sort((firstValue, secondValue) => {
        if (sorter.field === TABLE_FIELDS.CREATED) {
          const firstTime = new Date(firstValue.created_at)
          const secondTime = new Date(secondValue.created_at)
          const arrange = firstTime > secondTime ? 1 : -1
          return sorter.sort === "asc" ? arrange : -arrange
        } else {
          const field = sorter.field as keyof BikeSpec
          const firstFieldValue: string = firstValue[field]?.toString() ?? ""
          const secondFieldValue: string = secondValue[field]?.toString() ?? ""
          return sorter.sort === "asc"
            ? firstFieldValue.localeCompare(secondFieldValue)
            : secondFieldValue.localeCompare(firstFieldValue)
        }
      })
    })
  }
  return dataList
}

export const filterBikeSpecList = (
  dataList: BikeSpec[],
  filterList: EmitFilterChanged["filterModel"]
) => {
  let filterDataList = [...dataList]
  filterList.forEach(filter => {
    switch (filter.field) {
      case TABLE_FIELDS.BIKE_MODEL:
        filterDataList = filterDataList.filter(data => data.name === filter.filter)
        break
      case TABLE_FIELDS.BRAND_CUSTOMER:
        filterDataList = filterDataList.filter(data => data.brand_id === +filter.filter)
        break
    }
  })
  return filterDataList
}
